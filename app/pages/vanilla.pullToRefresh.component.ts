import {Component} from '@angular/core';
import {MaterialCard} from "../controls/card.component";
import {ROUTER_DIRECTIVES, Router, OnActivate, OnDeactivate, CanReuse, OnReuse,
 RouteParams, ComponentInstruction, RouteConfig } from '@angular/router-deprecated';

@Component({
  selector: 'Start',
  directives: [MaterialCard, ROUTER_DIRECTIVES],
  template: `
    <StackLayout class='padding'>
        <Label text='Pull to refresh'></Label>
    </StackLayout>
  `
})
export class VanillaPullToRefreshPage  {

  constructor() {

  }
  
}