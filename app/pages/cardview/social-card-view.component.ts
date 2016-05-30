import {Component} from '@angular/core';
import {MATERIAL_DIRECTIVES} from "../../controls/material";
@Component({
  selector: 'social-card-view',
  directives: [MATERIAL_DIRECTIVES],
  styleUrls: ["./pages/cardview/cardView.page.componet.css"],
  template: `
    <material-card>
        <material-card-header text='Social Card View'></material-card-header>
    </material-card>  

    <CardView shadowColor="#FE00FC" elevation="10" margin="10">
        <StackLayout>
            <StackLayout class="padding">
            <GridLayout class="item-avatar" rows="auto" columns="50,*">
                <img src="~/imgs/woman-1369253__340.jpg" col="0" height="40" width="40" stretch ="none">
                <stack-layout col="1">
                    <label text="hi" class="h2" col="1"></label>
                    <label text="ho" class="p" col="1"></label>
                </stack-layout>
            </GridLayout>
            </StackLayout>
            
            <img src="~/imgs/baltic-sea-1367195__340.jpg">
            
            <StackLayout class="padding">
                <Label class="p" textWrap="true" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo nunc nec commodo placerat. Sed sollicitudin auctor mauris, a egestas arcu ultrices eu. Cras sollicitudin nunc mauris. Phasellus posuere leo tincidunt lacus ullamcorper rutrum. Aliquam porta ultrices leo ut placerat. Curabitur scelerisque nec quam eget vulputate.">
                </Label>
                
            </StackLayout>
            
        </StackLayout>
    </CardView>
  `
})
export class SocialCardView {

  constructor() {

  }
}