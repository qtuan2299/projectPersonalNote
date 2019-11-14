import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, InfiniteScroll, NavParams } from 'ionic-angular';
import { HomeService } from '../../services/home-service';
import { Newsdetail } from '../newsdetail/newsdetail';
import { DataJsonController } from '../../controller/datajsoncontroller'
import { Key } from '../../key/key'
import { User } from '../../services/globalData';
import { PageLoginPage } from '../page-login/page-login';
import { Token } from '../../services/token';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{
  @ViewChild(InfiniteScroll) infiniteScroll: InfiniteScroll; 
  params:any;
  user:any;
  tieuDe:any;
  linkImage:any;
  tomTat:any;
  noiDung:any;
  ngayPhatHanh:any;
  listData: Array<{tieuDe:String,linkImage:String,tomTat:String,noiDung:String,ngayPhatHanh:String}> = [];

  start = 0;
  end = 0;

  listDataTemp = this.dataJsonCtl.HandleViewEvent(this.key.Get_Home_Page); 
  constructor(public navCtrl: NavController,
    private key:Key,
    private home:HomeService,
    private dataJsonCtl:DataJsonController,
    private navP: NavParams, 
    public gd : User,
    public token: Token
    ) {
    this.params=this.home.getTitle();
    this.user=gd.getUser();   
  }
  
  openPage(item)
  {
    this.navCtrl.push(Newsdetail,{page:item});
  }
  ngOnInit(){
    //this.listDataTemp
    //this.last=this.listDataTemp.length/2;
    this.listDataTemp.then(data =>{
      let Data = JSON.parse(data.data);
      for (let index = 0; index < 5; index++) {
        //const element = array[idex];
        console.log("length: ",this.listDataTemp.legth);
        console.log("OnInit: ")
        this.noiDung = Data.result[index].noiDung;
        this.tieuDe = Data.result[index].tieuDe;
        this.tomTat = Data.result[index].tomTat;
        this.ngayPhatHanh = Data.result[index].ngayPhatHanh;
        this.linkImage = 'http://hinnova.vn:8002/assets/images/'+Data.result[index].linkImage;
        //'http://192.168.1.211:8803/assets/images/'+
        this.listData.push({noiDung: this.noiDung, tieuDe: this.tieuDe, tomTat: this.tomTat, ngayPhatHanh:this.ngayPhatHanh,linkImage:this.linkImage});
        //this.listData.push(data[0])???; error khi build do ionic không đọc dc data[0], nhưng angular lại hiểu.
      }
    })
  }

    doInfinite(infiniteScroll){
      console.log("Begin asyne Operator");
      this.start +=5;
      this.end = this.start+5;
      setTimeout(() => {
        this.listDataTemp.then(data => {
          let Data = JSON.parse(data.data)
          for (let index = this.start; index < this.end; index++) {
            console.log("index: ",index);
            if(index > Data.result.length-1) break;
            this.noiDung = Data.result[index].noiDung;
            this.tieuDe = Data.result[index].tieuDe;
            this.tomTat = Data.result[index].tomTat;
            this.ngayPhatHanh = Data.result[index].ngayPhatHanh;
            this.linkImage = 'http://hinnova.vn:8002/assets/images/'+Data.result[index].linkImage;
            this.listData.push({noiDung: this.noiDung, tieuDe: this.tieuDe, tomTat: this.tomTat, ngayPhatHanh:this.ngayPhatHanh,linkImage:this.linkImage});
          }
         
          infiniteScroll.complete();
          if(Data.result.length==this.listData.length){
            console.log(this.listData.length);
            this.infiniteScroll.enable(false);
            console.log('Asyns Operation has end!');
          }
        })    
      }, 1000);
    }
    
    logout(){
      this.gd.setUser(null);
      this.token.setToken("");
    
      this.navCtrl.setRoot(PageLoginPage);

    }
  }
