import {Component, Input} from '@angular/core';

@Component({
  selector: 'material-card-header',
  template: `
    <StackLayout class='material-card-header padding'>
        <Label [text]="text" textWrap="true"></Label>
    </StackLayout>
  `,
  styleUrls: ["./controls/card/card.header.component.css"]
})
export class MaterialCardHeader {
    @Input("text")
    public text : string = "";

    constructor() {

    }
}