import { NgModule } from "@angular/core";
import { Register } from "./register";
import { IonicPageModule } from "ionic-angular";

@NgModule({
    declarations:[
        Register,
    ],
    imports:[
        IonicPageModule.forChild(Register),
    ]
})
export class RegisterModule{}