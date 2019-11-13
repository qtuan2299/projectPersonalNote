import { Component } from "@angular/core";
import { HTTP } from "@ionic-native/http";
import { Token } from "../../services/token";
import { NavController, AlertController } from "ionic-angular";
import { PageLoginPage } from "../page-login/page-login";

@Component({
    templateUrl: "register.html",
    selector: "register",
})
export class Register{
    public username:any;
    public password:any;
    public email:any;
    tokenTemp:any = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjEwIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZSI6InF0dWFuIiwiQXNwTmV0LklkZW50aXR5LlNlY3VyaXR5U3RhbXAiOiJDMjZJQlBNTE1WQUVNT0JXTEtTQVJESlhHWU5VVUlRVCIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFkbWluIiwic3ViIjoiMTAiLCJqdGkiOiJkYzViNGI1MS0yZDZiLTQzOTEtYTZkNi1lNDRhMzk3ZmQ1ODgiLCJpYXQiOjE1NzM1MzE3MzksIm5iZiI6MTU3MzUzMTczOSwiZXhwIjoxNTczNjE4MTM5LCJpc3MiOiJIaW5ub3ZhQWJwIiwiYXVkIjoiSGlubm92YUFicCJ9.CLnouKKkkX8rhntztqBknbl0NkPAHkVIHXcy9nvetuQ';
    urlAPI='http://192.168.1.221:8803/api/services/app/User/Create'
    constructor(private http:HTTP, 
        private token:Token,
        private Nav:NavController,
        private alertCtrl:AlertController){

    }
    register(){
        console.log("test Register(): ",this.username);
        console.log("test Register(): ",this.password);
        this.http.setDataSerializer('json');
        this.http.post(this.urlAPI,{
            'userName': this.username,//'this.username',
            'name': "stringghg gh ",
            'surname': 'stringhj',
            'emailAddress': this.email,//this.email,
            'avatar': 'string',
            'isActive': 'true',
            'roleNames': [
              'users'
            ],
            'password': this.password,
        },{
            'Authorization':'Bearer '+this.tokenTemp,
        })
        .then(data => {
            let Data = JSON.parse(data.data);

            if(data.status == 200){
                this.Nav.push(PageLoginPage);
            }
            else{ 
                console.log("error register's page! status different 200");
                let alert = this.alertCtrl.create({
                    subTitle: Data.error.message,
                    buttons: ['Close']
                })
                alert.present();
            }
        })
        .catch(err => {
            console.log("error post method to server: ", err.error);
            console.log("header: ",err.header);
            console.log("status: ",err.status);
            let Error = JSON.parse(err.error);
            let alert  = this.alertCtrl.create({
                subTitle: Error.error.details,
                buttons: ['Close']
            })
        alert.present();

        })
    }
    skip(){
        this.Nav.push(PageLoginPage)
    }
    
}