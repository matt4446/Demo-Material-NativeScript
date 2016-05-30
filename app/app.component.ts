import {Component} from "@angular/core";
import {RouteConfig, ROUTER_PROVIDERS, ROUTER_DIRECTIVES, ComponentInstruction, RouteParams} from '@angular/router-deprecated';
import { NS_ROUTER_DIRECTIVES, NS_ROUTER_PROVIDERS } from "nativescript-angular/router";

import {MaterialCard} from "./controls/card.component";
//pages
import {StartPage} from "./pages/start.component";
import {CardViewPage} from "./pages/cardView.page.componet";
import {VanillaPullToRefreshPage} from "./pages/pullToRefresh.page.component";
import {RefreshImagePage} from "./pages/refreshImage.page.component";
import {FabPage} from "./pages/fab.page.component";

@RouteConfig([
    { path: "/", component: StartPage, name: "Start", useAsDefault: true },
    { path: "/vanilla-cardview", name: "VanillaCardview", component: CardViewPage },
    { path: "/vanilla-pullToRefresh", name:  "VanillaPullToRefresh", component: VanillaPullToRefreshPage},
    { path: "/refresh-image", name: "RefreshPage", component: RefreshImagePage },
    { path: "/fab-page", name : "FabPage", component: FabPage}
])

@Component({
  selector: "main",
  directives: [NS_ROUTER_DIRECTIVES],
  providers: [NS_ROUTER_PROVIDERS],
  template: "<page-router-outlet></page-router-outlet>"
})
export class AppComponent {}