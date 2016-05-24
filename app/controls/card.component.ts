import { Component, ViewChild, ElementRef, Directive, Input, Output, EventEmitter, ContentChildren } from "@angular/core";
import { CardView } from "cardview";
import { Observable, Subscription, Subject} from 'rxjs/Rx';

import { registerElement, ViewClass } from "nativescript-angular/element-registry";
registerElement("CardView", () => require("nativescript-cardview").CardView);

@Component({
    selector: "material-card",
    //templateUrl: "controls/list/list.html",
    template:`
    <CardView #item shadowColor="#FE00FC" elevation="10" margin="10">
        <StackLayout>
            <ng-content></ng-content>
        </StackLayout>
    </CardView>
    `
})
export class MaterialCard {
    constructor() 
    {
    }
    
    @ViewChild('item') 
    set _listItems(item: ElementRef){
        let cardView: any = item.nativeElement;
        //cardView.shadowColor = new Color("#FF0000").android;
    }
}