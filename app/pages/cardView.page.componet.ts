import {Component} from '@angular/core';
import {MaterialCard} from "../controls/card.component";
import {ROUTER_DIRECTIVES, Router, OnActivate, OnDeactivate, CanReuse, OnReuse,
 RouteParams, ComponentInstruction, RouteConfig } from '@angular/router-deprecated';
import {MaterialFab} from "../controls/fab.component";
//import { registerElement, ViewClass } from "nativescript-angular/element-registry";
//registerElement("CardView", () => require("nativescript-cardview").CardView);
import {MATERIAL_DIRECTIVES} from "../controls/material";
import {HomeFab} from "./templates/home-fab";
@Component({
  selector: 'CardView',
  directives: [HomeFab, MATERIAL_DIRECTIVES, ROUTER_DIRECTIVES],
  template: `
    <GridLayout rows="*">
      <StackLayout>
        <material-card>
          <StackLayout class='padding'>
              <Label text='Card View'></Label>
          </StackLayout>
          
        </material-card>
        <CardView #item shadowColor="#FE00FC" elevation="10" margin="10">
            <StackLayout class='padding'>
                <img src="https://unsplash.it/1600/1600/" stretch ="none">
            </StackLayout> 
        </CardView>
      </StackLayout>
      <home-fab></home-fab>
    </GridLayout>
    
  `
  
})
export class CardViewPage  {

  constructor() {

  }
  
}