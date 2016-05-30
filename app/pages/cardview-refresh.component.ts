import {Component} from '@angular/core';
import {MATERIAL_DIRECTIVES} from "../controls/material";
import {MaterialPullToRefresh} from "../controls/pullToRefresh.component";
@Component({
  selector: 'Start',
  directives: [MATERIAL_DIRECTIVES],
  template: `
    <StackLayout class='padding'>
      <material-card>
        <StackLayout class='padding'>
          <Label text='hello world'></Label>
          <Button class="button" text="Page 1"></Button>
              
        </StackLayout>
      </material-card>  
    </StackLayout>
  `
})
export class SimpleStart  {

  constructor() {

  }
  
}