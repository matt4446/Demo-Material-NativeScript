import {Component} from "@angular/core"
import {MaterialCard} from "../controls/card.component";
import {MaterialPullToRefresh} from "../controls/pullToRefresh.component";
import {Image} from "ui/image";
import {PullToRefresh} from "nativescript-pulltorefresh";
import {Color} from "color";
import {MaterialFab} from "../controls/fab.component";

@Component({
    selector: "RefreshImagePage",
    template: `
        <StackLayout class="padding">
            <material-card>
                <StackLayout class='padding'>
                   <Label text="home face alarm" class="material-icons" textWrap="true"></Label>
                   <Label text='FAB page'></Label>
                </StackLayout>
            </material-card> 
            <!--
            <material-fab>
                <Label text="hi" textWrap="true" class="fab-font"></Label>
            </material-fab>
            -->
            <material-fab>
                <Label text="face" class="material-icons fab-font" textWrap="true"></Label>
            </material-fab>
        </StackLayout>
    `,
    directives: [MaterialCard, MaterialFab]
})
export class FabPage
{
    
}
