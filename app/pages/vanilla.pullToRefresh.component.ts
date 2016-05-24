import {Component} from '@angular/core';
import {MaterialCard} from "../controls/card.component";
import {PullToRefresh} from "nativescript-pulltorefresh";
import {ROUTER_DIRECTIVES, Router, OnActivate, OnDeactivate, CanReuse, OnReuse,
 RouteParams, ComponentInstruction, RouteConfig } from '@angular/router-deprecated';

@Component({
  selector: 'Start',
  directives: [MaterialCard, ROUTER_DIRECTIVES],
  template: `
    <StackLayout class='padding'>
        <Label text='Pull image to refresh'></Label>
        
        <PullToRefresh (refresh)="refreshPage($event)">
            <ScrollView>
                <StackLayout>
                   <img [src]="RandomImage" stretch ="none"> 
                </StackLayout>
            </ScrollView>
        </PullToRefresh>
    </StackLayout>
  `
})
export class VanillaPullToRefreshPage  {
  private _randomImage = "https://unsplash.it/1200/1200/?random=";

  constructor() {

  }
  public RefreshedTimes = 0;
  public RandomImage = "https://unsplash.it/1200/1200/?random=0";
  
  public refreshPage(args: any) {
        console.log("page refresh -> go");
        let control : PullToRefresh = args.object;

        setTimeout(() => {
            this.RefreshedTimes += 1;
            this.RandomImage = this._randomImage + this.RefreshedTimes;
            args.object.refreshing = false;
        }, 1000);
    }
}