import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES, Router, OnActivate, OnDeactivate, CanReuse, OnReuse,
 RouteParams, ComponentInstruction, RouteConfig } from '@angular/router-deprecated';
import {MATERIAL_DIRECTIVES} from "../../controls/material"
@Component({
  selector: 'home-fab',
  template: `
    <material-fab text="home" (tap)="NavigateHome()" vertical-align="top" horizontal-align="right">
    </material-fab>  
  `,
  directives: [MATERIAL_DIRECTIVES]
})
export class HomeFab {

    constructor(private router : Router) {

    }

    public NavigateHome(): void {
      console.log("navigate to start");
      this.router.navigate(["Start"])
    }
}