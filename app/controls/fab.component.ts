
import { Component } from "@angular/core";
import { Observable, Subscription, Subject} from 'rxjs/Rx';
import { ViewChild, ElementRef, Directive, Input, Output, EventEmitter, ContentChildren } from "@angular/core";
import { registerElement, ViewClass } from "nativescript-angular/element-registry";
import { StackLayout} from "ui/layouts/stack-layout";
import { AnimationPromise } from "ui/animation";

registerElement("Fab", () => require("nativescript-floatingactionbutton").Fab);

@Component({
    selector: "material-fab",
    template:`
    <AbsoluteLayout class="fab-container">
        <StackLayout class="fab-button-content" style="z-index: 1;">
            <!--<ng-content></ng-content>
            -->
            <Label text="face" class="material-icons fab-font" textWrap="true"></Label>
        </StackLayout>
    
        <GridLayout>
            
        
            <Fab rippleColor="#f1f1f1" class="fab-button">
            </Fab>
        </GridLayout>
    </AbsoluteLayout>
    `,
    //outputs: ["tap"]
    styleUrls: ["./controls/fab.common.css"]
})
export class MaterialFab {
    
    constructor()
    {
        console.log("material-fab - started");
    }
        
    public tapped($event){
        console.log("tapped on fab");
        this.tap.next($event);
    }
       
    public tap = new EventEmitter(); 
}

