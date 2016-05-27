import {Component} from "@angular/core";
import {RouteConfig, ROUTER_PROVIDERS, ROUTER_DIRECTIVES, ComponentInstruction, RouteParams} from '@angular/router-deprecated';
import { NS_ROUTER_DIRECTIVES, NS_ROUTER_PROVIDERS } from "nativescript-angular/router";

import {MaterialCard} from "./controls/card.component";
//pages
import {StartPage} from "./pages/start.component";
import {VanillaCardViewPage} from "./pages/vanilla.cardView.component";
import {VanillaPullToRefreshPage} from "./pages/vanilla.pullToRefresh.component";
import {RefreshImagePage} from "./pages/refresh-image.component";
import {FabPage} from "./pages/fab.component";

@RouteConfig([
    { path: "/", component: StartPage, name: "Start", useAsDefault: true },
    { path: "/vanilla-cardview", name: "VanillaCardview", component: VanillaCardViewPage },
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