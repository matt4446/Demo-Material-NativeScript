import {Component} from '@angular/core';
import {MATERIAL_DIRECTIVES} from "../../controls/material";

@Component({
  selector: 'image-card-view',
  directives: [MATERIAL_DIRECTIVES],
  styleUrls: ["./pages/cardview/cardView.page.componet.css"],
  template: `
    <material-card>
      <material-card-header text='Image Card View'></material-card-header>
    </material-card>
  
    <CardView shadowColor="#FE00FC" elevation="10" margin="10">
        <GridLayout>
            <img src="~/imgs/candles-1359478__340.jpg" width="340">
            <StackLayout class="cardview-image-heading">
                <Label text="Title" textWrap="true" class="cardview-image-title"></Label>
                <Label text="sub-title" textWrap="true" class="cardview-image-sub-title"></Label>
            </StackLayout>
        </GridLayout>
    </CardView>
  `
})
export class ImageCardView {

  constructor() {

  }
}