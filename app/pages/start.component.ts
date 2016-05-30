import {Component} from '@angular/core';
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
            
            <Button class="button button-positive" text="CardView"
                [nsRouterLink]="['VanillaCardview']"></Button>
                
            <Button class="button button-positive" text="Pull to refresh"
                [nsRouterLink]="['VanillaPullToRefresh']"></Button>

            <Button class="button button-positive" text="CardView + pull to refresh"
              [nsRouterLink]="['RefreshPage']"></Button>
      
            <Button class="button button-positive" text="Fabs with material icons"
              [nsRouterLink]="['FabPage']"></Button>
            
          </material-card> 
          <material-card>
            <StackLayout class="padding">
              <Label text="Material icons" textWrap="true"></Label>
              <Label text="home face alarm" class="material-icons" textWrap="true"></Label>    
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