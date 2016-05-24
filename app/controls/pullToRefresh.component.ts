
import { Component } from "@angular/core";
import { Observable, Subscription, Subject} from 'rxjs/Rx';
import { ViewChild, ElementRef, Directive, Input, Output, EventEmitter, ContentChildren } from "@angular/core";
import { registerElement, ViewClass } from "nativescript-angular/element-registry";
import { PullToRefresh } from "nativescript-pulltorefresh";
import { StackLayout} from "ui/layouts/stack-layout";
import { AnimationPromise } from "ui/animation";

registerElement("PullToRefresh", () => require("nativescript-pulltorefresh").PullToRefresh);

@Component({
    selector: "material-pull-to-refresh",
    template:`
    <PullToRefresh #item (refresh)="refreshMe($event)">
        <ScrollView>
            <StackLayout #body>
                <ng-content></ng-content>
            </StackLayout>
        </ScrollView>
    </PullToRefresh>
    `,
    outputs: ["refresh", "refreshCompleted"],
    //inputs: ["complete"]
})
export class MaterialPullToRefresh {
    
    constructor()
    {
        console.log("material-pull-to-refresh - started");
    }
    
    @ViewChild("body")
    private body : ElementRef; 
    
    @ViewChild("item")
    public pullToRefreshElement : ElementRef;
    
    private refreshMe(args : any){
        // console.log("refresh called. args:");
        // console.log(args);
        
        // this.refreshStarted.next(args);
        
        let refreshCompleted = () => { 
            args.object.refreshing = false;
            this.refreshContentCompleted({});
        };
        
        this.refresh.next({
            object: args.object,
            completed : refreshCompleted
        });
        
        this.shrink();
    }
    
    private refreshContentCompleted($event){
        console.log("completed");
        this.refreshCompleted.next($event);
        this.grow();   
    }
       
    public refresh = new EventEmitter();
    public refreshCompleted = new EventEmitter();
    
    
    private transition: AnimationPromise = null; 
    private shrink(){
        let stackLayout: StackLayout = this.body.nativeElement;
        let animation = stackLayout.animate({ opacity : 0.2, scale: { x : 0.5, y: 0.5 } });
        animation.then(() => {
            let innerAnimation = stackLayout.animate({ opacity: 0, translate: { x: -1000, y: 0 }});
            return innerAnimation;
        });
        this.transition = animation;
    }
    
    private grow(){
        let stackLayout: StackLayout = this.body.nativeElement;
        
        let fadeIn = () => { 
            console.log("fade in");
            stackLayout.translateX = 0;
            return stackLayout.animate({ opacity : 1, scale: { x : 1, y: 1 }, translate: { x: 0, y: 0} }) 
        };
        
        this.transition
            .then(fadeIn);
        
    }
}

