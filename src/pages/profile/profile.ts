import { Component, OnInit } from "@angular/core";
import { NavParams, NavController, AlertController, Nav, Content } from "ionic-angular";
import { User } from "../../services/globalData";
import { Token } from "../../services/token";
import { PageLoginPage } from "../page-login/page-login";
import { File } from '@ionic-native/file';
import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/camera';
import { HTTP } from '@ionic-native/http';
import { LoadingService } from "../../services/loading-services";


@Component({
  templateUrl:"profile.html",
  selector:"profile",
  providers: [Camera,File,LoadingService]
})

export class Profile implements OnInit{
  name:any;
  email:any;
  public base64photos:any;
  user:any;
  disable=true;
  Showchangepass = false;
  public oldPass:any;
  public newPassword:any;
  public rePass:any;

  constructor(NavP:NavParams,
      public NavCtrl:NavController,
      public gd:User,
      public token:Token,
      public alertCtrl:AlertController,
      public camera: Camera, 
      public file:File, 
      public http:HTTP,
      public alerCtrl:AlertController,
      public loading:LoadingService,
      ){
        console.log("get variable global: ",gd.getUser());        
        this.user = gd.getUser();
        this.name = this.user.result.name ;
        this.email = this.user.result.emailAddress;
    }

    ngOnInit(){
      if(this.token.getToken()==""){
        let alert = this.alertCtrl.create({
          title: 'Notification',
          message: 'You are not log in! \n Log in now!',
          buttons:[
            {
              text: 'Cancel',
              role: 'canel',
              handler: () => {                 
              }
            },
            {
              text: 'Log In',
              handler: () => {
                this.NavCtrl.push(PageLoginPage)
              }
            }
          ]
        });
        alert.present();
      }
    }

    startCamera(){
      const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation:true,
    };
    this.loading.show();
    this.camera.getPicture(options).then((imageData) => {
    let filename = imageData.substring(imageData.lastIndexOf('/')+1);
    let path = imageData.substring(0,imageData.lastIndexOf('/')+1);
    this.file.readAsDataURL(path,filename).then((base64data)=>{
      this.http.setDataSerializer('json');
      this.http.put('http://hinnova.vn:8803/api/services/app/User/Update',{
          "userName": this.user.result.userName,
          "name": this.user.result.name,
          "surname": this.user.result.surname,
          "emailAddress": this.user.result.emailAddress,
          "avatar": base64data,
          "isActive": this.user.result.isActive,
          "fullName": this.user.result.fullName,
          "lastLoginTime": this.user.result.lastLoginTime,
          "creationTime": this.user.result.creationTime,
          "roleNames": this.user.result.roleNames,
          "id": this.user.result.id
        },{
          'Authorization':'Bearer '+ this.token.getToken(),
        }).then(data => { 
            // this.user.result.avatar;
            this.loading.hide();
            this.user.result.avatar=base64data;
            alert('Changed Avatar Success!');

            base64data=null;
            this.gd.setUser(this.user);
            // location.reload();
          })
    }, (err) => {
      this.loading.hide();
      alert(err.error);
     });
    })
  }

  dis(){
    if(this.disable==false && this.checkChange()){
      this.loading.show();
      console.log(this.user);
      this.http.put('http://hinnova.vn:8803/api/services/app/User/Update',{
          "userName": this.user.result.userName,
          "name": this.name,
          "surname": this.user.result.surname,
          "emailAddress": this.email,
          "avatar": this.user.result.avatar,
          "isActive": this.user.result.isActive,
          "fullName": this.user.result.fullName,
          "lastLoginTime": this.user.result.lastLoginTime,
          "creationTime": this.user.result.creationTime,
          "roleNames": this.user.result.roleNames,
          "id": this.user.result.id
        },{
          'Authorization':'Bearer '+ this.token.getToken(),
        }).then(data => { 
            this.user.result.name = this.name;
            this.user.result.emailAddress = this.email;
            this.gd.setUser(this.user);
            this.loading.hide();
            alert('Changed Profile Success!');
            
          })
          
    }
    
    this.disable=!this.disable;

  }

  showChangePass(){
    this.Showchangepass=!this.Showchangepass;
  }

  isShowChangePass(){
    return this.Showchangepass;
  }
  checkChange(){
    if(this.name != this.user.result.name || this.email != this.user.result.emailAddress)
    return true;
    else return false;
  }
  ChangePass(){
    console.log("oldpass: ",this.oldPass);
    console.log("newpas: ", this.newPassword);
    console.log("repass: ", this.rePass);
    console.log("fa");
    if(this.rePass==this.newPassword){
      this.loading.show();
      this.http.setDataSerializer('json');
      this.http.post('http://hinnova.vn:8803/api/services/app/User/ChangePassword',{
        "currentPassword": this.oldPass,
        "newPassword": this.newPassword
      },{
        'Authorization':'Bearer '+ this.token.getToken()
      })
      .then( data => {
        this.loading.hide();
        let Data = JSON.parse(data.data);
        if(data.status == 200){
          let alert = this.alerCtrl.create({
            title:'Notification',
            subTitle:'Change Success!',
            buttons:['Close']
          })
          this.loading.hide();
          alert.present()
          this.Showchangepass=!this.Showchangepass;
          console.log("zo the");
          this.newPassword="",
          this.oldPass="",
          this.rePass=""
        }
        else{
          this.loading.hide();
          let alert = this.alerCtrl.create({
            title:'Notification',
            subTitle: 'Check filled!',
            buttons:['Close']
          })
          alert.present()
        }
      })
      .catch( err => {
        this.loading.hide();
        let Error = JSON.parse(err.error);
        let alert = this.alerCtrl.create({
          title:'Notification',
          subTitle: Error.error.message,
          buttons:['Close']
        })
        alert.present();
        console.log("zo catch");
        
      })
    }
  }

}