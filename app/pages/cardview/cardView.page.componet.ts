import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES, Router, OnActivate, OnDeactivate, CanReuse, OnReuse,
 RouteParams, ComponentInstruction, RouteConfig } from '@angular/router-deprecated';
//import { registerElement, ViewClass } from "nativescript-angular/element-registry";
//registerElement("CardView", () => require("nativescript-cardview").CardView);
import {MATERIAL_DIRECTIVES} from "../../controls/material";
import {HomeFab} from "../templates/home-fab";
import {ImageCardView} from "./image-card-view.component"
import {SocialCardView} from "./social-card-view.component"
@Component({
  selector: 'CardView',
  directives: [ImageCardView, SocialCardView, HomeFab, MATERIAL_DIRECTIVES, ROUTER_DIRECTIVES],
  styleUrls: ["./pages/cardview/cardView.page.componet.css"],
  template: `
    <ScrollView>
        <GridLayout rows="*">
        <StackLayout class="padding">
          
          <image-card-view>
          </image-card-view>
          
          <social-card-view>
          </social-card-view>         
          
        </StackLayout>
        <home-fab></home-fab>
      </GridLayout>
    </ScrollView>
    
  `
})
export class CardViewPage  {

  constructor() {

  }
  
}