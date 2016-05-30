import {Component} from '@angular/core';
import {MaterialCard} from "../controls/card.component";
import {MaterialFab} from "../controls/fab.component";
//import {MaterialFab} from "../controls/fab.component";
import {ROUTER_DIRECTIVES, Router, OnActivate, OnDeactivate, CanReuse, OnReuse,
 RouteParams, ComponentInstruction, RouteConfig } from '@angular/router-deprecated';
import { NS_ROUTER_DIRECTIVES, NS_ROUTER_PROVIDERS } from "nativescript-angular/router";
import {MATERIAL_DIRECTIVES} from "../controls/material";
import {HomeFab} from "./templates/home-fab";
@Component({
  selector: 'Start',
  directives: [HomeFab, MATERIAL_DIRECTIVES, ROUTER_DIRECTIVES, NS_ROUTER_DIRECTIVES],
  template: `
    <ScrollView>
      <GridLayout>
        <StackLayout class='padding'>
        
          <material-card>
            <StackLayout class='padding'>
              <Label text='Card View'></Label>
              <Button class="button button-positive" text="CardView"
                [nsRouterLink]="['VanillaCardview']"
              ></Button>
            </StackLayout>
            
            <StackLayout class='padding'>
              <Label text='Pull To Refresh'></Label>
              <Button class="button button-positive" text="Pull to refresh"
                [nsRouterLink]="['VanillaPullToRefresh']"></Button>
            </StackLayout>
            
            <StackLayout class='padding'>
              <Label text='Both! Refresh image + animation'></Label>
              <Button class="button button-positive" text="CardView + pull to refresh"
                [nsRouterLink]="['RefreshPage']"></Button>
            </StackLayout>
            
            <StackLayout class='padding'>
              <Label text='Fab'></Label>
              <Button class="button button-positive" text="Fab"
                [nsRouterLink]="['FabPage']"></Button>
            </StackLayout>
          </material-card> 

        </StackLayout>
        <home-fab class="top right"></home-fab>
      </GridLayout>
    </ScrollView>
  `
})
export class StartPage  {

  constructor() {

  }
  
  
  
}