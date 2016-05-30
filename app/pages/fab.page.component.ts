import {Component} from "@angular/core"
import {MaterialCard} from "../controls/card.component";
import {MaterialPullToRefresh} from "../controls/pullToRefresh.component";
import {Image} from "ui/image";
import {PullToRefresh} from "nativescript-pulltorefresh";
import {MATERIAL_DIRECTIVES} from "../controls/material";
import {HomeFab} from "./templates/home-fab";
import {Router, RouteConfig, ROUTER_PROVIDERS, ROUTER_DIRECTIVES, ComponentInstruction, RouteParams} from '@angular/router-deprecated';

@Component({
    selector: "RefreshImagePage",
    template: `
        <ScrollView>
            <StackLayout>
                <GridLayout rows="*">
                    <StackLayout>
                        <material-card>
                            <StackLayout class='padding'>
                                <Label text="home face alarm" class="material-icons" textWrap="true"></Label>
                                <Label text='FAB page'></Label>
                            </StackLayout>
                        </material-card> 
                    </StackLayout>
                    <home-fab></home-fab>
                </GridLayout>
                
                <GridLayout height="500" rows="*" style="background-color:#333333;">
 
                        
                        <material-fab text="face" vertical-align="top" horizontal-align="left">
                        </material-fab>
                        <material-fab text="face" vertical-align="top" horizontal-align="center">
                        </material-fab>
                        <material-fab text="done" vertical-align="top" horizontal-align="right">
                        </material-fab>
                        
                        <material-fab text="face" vertical-align="center" horizontal-align="left">
                        </material-fab>
                        <material-fab text="face" vertical-align="center" horizontal-align="center">
                        </material-fab>
                        <material-fab text="done" vertical-align="center" horizontal-align="right">
                        </material-fab>
                        
                        <material-fab text="loyalty" vertical-align="bottom" horizontal-align="left">
                        </material-fab>
                        <material-fab text="settings" vertical-align="bottom" horizontal-align="right">
                        </material-fab>
       
                    
                </GridLayout>
            </StackLayout>
        </ScrollView>
        
    `,
    directives: [MATERIAL_DIRECTIVES, HomeFab]
})
export class FabPage
{
    constructor(private router: Router){
        
    }
    
    public NavigateHome(): void {
        this.router.navigate(["Start"])
    }
}
