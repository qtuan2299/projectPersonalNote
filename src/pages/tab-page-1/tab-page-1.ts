import { Component } from '@angular/core';
import { WorkScheduleService } from '../../services/workschedule-service';
import { NavParams, NavController } from 'ionic-angular';

import { LocalNotifications } from '@ionic-native/local-notifications'
import { HTTP } from '@ionic-native/http';
import { User } from '../../services/globalData';
import { Token } from '../../services/token';

@Component({
  selector: 'date-pipe',
  templateUrl: 'tab-page-1.html',
  providers: [WorkScheduleService, LocalNotifications]
})
export class Person {
  d= new Date();       
  time:any;
  p:any;
  tieuDe:String;
  creationTime:String;
  params: Array<{tieuDe:String,creationTime:any}> = [];
  constructor(NavP:NavParams,
    public NavCrtl:NavController, 
    private workschedule: WorkScheduleService,
    private localNotifications: LocalNotifications,
    private http:HTTP,
    public gd:User,
    public token:Token
    ) {
    // this.params;///
    //this.workschedule.getDataForLayout1();
    this.schedulelocalNotification();
    
  }
  schedulelocalNotification(){
    //test fuctional with stastic data
    // for (let i = 0; i < this.params.length; i++) {
    //    this.time=this.params[i].time.split(':');
    //    if(this.time[0]-this.d.getHours()==1||this.time[0]-this.d.getHours()==0)
    //         this.localNotifications.schedule({
    //         title: this.params[i].title +' '+ this.params[i].time,
    //          text: this.params[i].title +'\n'+ this.params[i].time
    //           +'\n'+ this.params[i].person +'\n'
    //           +this.params[i].pin+'\n'+this.params[i].contact
    //         // trigger: {at: new Date(this.d.getDay(),this.time[0],this.time[1])},
    //          // sound: isAndroid ? 'file://sound.mp3': 'file://beep.caf',
    //         });  
    
    //   }
      let userData = this.gd.getUser(); 
      console.log("id: ",userData.result.id);
      
      this.http.setDataSerializer('json');
      this.http.get('http://hinnova.vn:8803/api/services/app/Announcement/GetListAsyncByUserId?UserId='+userData.result.id,{

      },{
        'Authorization':'Bearer '+ this.token.getToken(),
      }).then( data => {
        let Data = JSON.parse(data.data);
        console.log("data: ",Data);
        
        if(data.status == 200){
          for (let index = 0; index < Data.result.length; index++) {
            this.tieuDe = Data.result[index].tieuDe;
            this.creationTime = Data.result[index].creationTime;

            this.params.push({tieuDe: this.tieuDe, creationTime:this.creationTime})
          }
        }
        //to do something
      })
      .catch(err => {
        //to do something
      })
    }
  testEvent(){
    this.localNotifications.schedule({
      title: 'wtf'
    });
  }
}
