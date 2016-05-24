import {Component} from '@angular/core';
import {MaterialCard} from "../controls/card.component";
import {ROUTER_DIRECTIVES, Router, OnActivate, OnDeactivate, CanReuse, OnReuse,
 RouteParams, ComponentInstruction, RouteConfig } from '@angular/router-deprecated';

//import { registerElement, ViewClass } from "nativescript-angular/element-registry";
//registerElement("CardView", () => require("nativescript-cardview").CardView);

@Component({
  selector: 'VanillaCardViewPage',
  directives: [MaterialCard, ROUTER_DIRECTIVES],
  template: `
    <StackLayout class='padding'>
        <Label text='Card View'></Label>
        
        <CardView #item shadowColor="#FE00FC" elevation="10" margin="10">
            <StackLayout class='padding'>
                <img src="https://unsplash.it/1600/1600/" stretch ="none">
            </StackLayout> 
        </CardView>
    </StackLayout>
  `
  
})
export class VanillaCardViewPage  {

  constructor() {

  }
  
}