
import { Component } from "@angular/core";
import { Observable, Subscription, Subject} from 'rxjs/Rx';
import { ViewChild, ElementRef, Directive, Input, Output, EventEmitter, ContentChildren } from "@angular/core";
import { registerElement, ViewClass } from "nativescript-angular/element-registry";
import { PullToRefresh } from "nativescript-pulltorefresh";

registerElement("PullToRefresh", () => require("nativescript-pulltorefresh").PullToRefresh);

@Component({
    selector: "material-pull-to-refresh",
    template:`
    <PullToRefresh #item (refresh)="refreshMe($event)">
        <ScrollView>
            <StackLayout>
                <ng-content></ng-content>
            </StackLayout>
        </ScrollView>
    </PullToRefresh>
    `,
    outputs: ["refreshStarted"],
    //inputs: ["complete"]
})

export class MaterialPullToRefresh {
    
    constructor()
    {
        console.log("material-pull-to-refresh - started");
    }
    
    @ViewChild("item")
    public pullToRefreshElement : ElementRef;
    
    private refreshMe(args : any){
        console.log("refresh called. args:");
        console.log(args);
        
        this.refreshStarted.next(args);
    }
       
    public refreshStarted = new EventEmitter();
}

