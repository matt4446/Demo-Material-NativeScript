import {Component} from '@angular/core';
import {MaterialCard} from "../controls/card.component";
import {MaterialPullToRefresh} from "../controls/pullToRefresh.component";
@Component({
  selector: 'Start',
  directives: [MaterialCard, MaterialPullToRefresh],
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