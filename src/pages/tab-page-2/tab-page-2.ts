import { Component } from "@angular/core";
import { NavParams, NavController, reorderArray } from "ionic-angular";
import { DataJsonController } from "../../controller/datajsoncontroller";
import { Key } from "../../key/key";
import { Notifidetail } from "../notificationdetail/notifidetail";
import { Tab2Module } from "./tab-page-2.module";
import { WorkScheduleService } from "../../services/workschedule-service";
import { NotificationService } from "../../services/notification-service";
import { User } from "../../services/globalData";
import { Token } from "../../services/token";
import { HTTP } from "@ionic-native/http";
@Component({
    templateUrl:"tab-page-2.html",
    providers: [WorkScheduleService,NotificationService]

})
export class Tab2{ 
    params:any;
    item:any;
    tieuDe:String;
    creationTime:String;
    page: Array<{tieuDe:String,creationTime:any}> = [];
    constructor( NavP:NavParams,
        public NavCrtl:NavController,
        private datajsonCtrl: DataJsonController,
        private key:Key,
        private gd:User,
        private token:Token,
        private http:HTTP,
         ){
        
        this.item=NavP.get("item");
        //this.page=this.datajsonCtrl.HandleViewEvent(this.key.Get_Notification_Page);
        this.params=this.datajsonCtrl.HandleViewEvent(this.key.Get_Notification_Title);
        this.getAllSchedule();
    }

    // reorderItems = (indexes): void => {
    //     this.page = reorderArray(this.page, indexes);
    // }
    getAllSchedule(){
        let userData = this.gd.getUser(); 
      console.log("id: ",userData.result.id);
      
      this.http.setDataSerializer('json');
      this.http.get('http://hinnova.vn:8803/api/services/app/Announcement/GetAllAnnouncementAsync',{

      },{
        'Authorization':'Bearer '+ this.token.getToken(),
      }).then( data => {
        let Data = JSON.parse(data.data);
        console.log("data: ",Data);
        
        if(data.status == 200){
          for (let index = 0; index < Data.result.length; index++) {
            this.tieuDe = Data.result[index].tieuDe;
            this.creationTime = Data.result[index].creationTime;// time
            console.log("data: ",Data.result[index].creationTime);
            this.page.push({tieuDe: this.tieuDe, creationTime: this.creationTime})
          }
        }
        //to do something
      })
      .catch(err => {
        //to do something
      })
    }
}
