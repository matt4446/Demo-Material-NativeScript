import {Component} from '@angular/core';
import {MaterialCard} from "../controls/card.component";
//import {MaterialFab} from "../controls/fab.component";
import {ROUTER_DIRECTIVES, Router, OnActivate, OnDeactivate, CanReuse, OnReuse,
 RouteParams, ComponentInstruction, RouteConfig } from '@angular/router-deprecated';
import { NS_ROUTER_DIRECTIVES, NS_ROUTER_PROVIDERS } from "nativescript-angular/router";

@Component({
  selector: 'Start',
  directives: [MaterialCard, ROUTER_DIRECTIVES, NS_ROUTER_DIRECTIVES],
  template: `
    <StackLayout class='padding'>
      <material-card>
        <StackLayout class='padding'>
          <Label text='Card View - basic'></Label>
          <Button class="button button-positive" text="CardView"
            [nsRouterLink]="['VanillaCardview']"
          ></Button>
        </StackLayout>
      </material-card> 
      
      <material-card>
        <StackLayout class='padding'>
          <Label text='Pull To Refresh - basic'></Label>
          <Button class="button button-positive" text="Pull to refresh"
            [nsRouterLink]="['VanillaPullToRefresh']"></Button>
        </StackLayout>
      </material-card>   
      
      <material-card>
        <StackLayout class='padding'>
          <Label text='Both! Refresh image + animation'></Label>
          <Button class="button button-positive" text="CardView + pull to refresh"
            [nsRouterLink]="['RefreshPage']"></Button>
        </StackLayout>
      </material-card>   
    </StackLayout>
  `
})
export class StartPage  {

  constructor() {

  }
  
}