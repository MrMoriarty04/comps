import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  standalone: false,
  templateUrl: './accordion.html',
  styleUrl: './accordion.css'
})
export class Accordion {
 
  @Input() items:any=[];
  openedItemIndex=0; 


  OnCLick(index:number){
    if(index===this.openedItemIndex){
      this.openedItemIndex=-1;
    }
    else
    this.openedItemIndex=index;
  }

}
