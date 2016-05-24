import {Component} from "@angular/core"
import {MaterialCard} from "../controls/card.component";
import {MaterialPullToRefresh} from "../controls/pullToRefresh.component";
import {Image} from "ui/image";
import {PullToRefresh} from "nativescript-pulltorefresh";
import {Color} from "color";
//Page is a wrapper on @Component

@Component({
    selector: "RefreshImagePage",
    template: `
        <StackLayout class="padding">

            <material-card>
                <StackLayout class='padding'>
                    <Label text='pull down on the image'></Label>
                    <label class="note" [text]="Message"></label>
                </StackLayout>
            </material-card> 
            <material-pull-to-refresh (refresh)="refreshPage($event)">
                <img [src]="RandomImage" stretch ="none"> 
            </material-pull-to-refresh>
        </StackLayout>
    `,
    directives: [MaterialCard, MaterialPullToRefresh]
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
        
        let randromColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
        
        let colors = {
            a : "#FC000D",
            b : "#19FF01"
        };
        control.color = new Color("#000000");

        control.animate({
            backgroundColor : new Color(randromColor),
        });
        
        control.color = new Color(colors.a);
        setTimeout(() => {
            args.object.refreshing = false;
            this.RefreshedTimes += 1;
            this.Message = "Pull to refresh - " + this.RefreshedTimes;
            this.RandomImage = this._randomImage + this.RefreshedTimes;
            control.color = new Color(colors.b);
            
            args.completed();
        }, 1000);
    }
}
