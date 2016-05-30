import {Component} from "@angular/core"
import {Image} from "ui/image";
import {PullToRefresh} from "nativescript-pulltorefresh";
import {Color} from "color";
//Page is a wrapper on @Component
import {HomeFab} from "./templates/home-fab";
import {MATERIAL_DIRECTIVES} from "../controls/material";
@Component({
    selector: "RefreshImagePage",
    template: `
        <GridLayout rows="" columns="">
            <StackLayout class="padding">
                <material-card>
                    <StackLayout class='padding'>
                        <Label text='Pull down on the image'></Label>
                        <label class="note" [text]="Message"></label>
                    </StackLayout>
                </material-card> 
                <material-card>
                    <StackLayout class='padding'>
                        <material-pull-to-refresh (refresh)="refreshPage($event)">
                            <img [src]="RandomImage" stretch ="none"> 
                        </material-pull-to-refresh>
                    </StackLayout>
                </material-card> 
            </StackLayout>
            <home-fab></home-fab>
        </GridLayout>
        
    `,
    directives: [HomeFab, MATERIAL_DIRECTIVES]
})
export class RefreshImagePage
{
    private _randomImage = "https://unsplash.it/1600/1600/?random=";

    public RefreshedTimes = 0;
    public Message = "Pull to refresh";
    public RandomImage = "https://unsplash.it/1600/1600/?random=0";
    
    constructor()
    {
    }
    
    public refreshPage(args: any) {
        console.log("page refresh -> go");
        let control : PullToRefresh = args.object;
                
        setTimeout(() => {
            console.log("end of refresh");
            //args.object.refreshing = false;
            this.RefreshedTimes += 1;
            this.Message = "Pull to refresh - " + this.RefreshedTimes;
            this.RandomImage = this._randomImage + this.RefreshedTimes;
           
            args.completed();
        }, 1000);
    }
}
