import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  standalone: false,
  templateUrl: './accordion.html',
  styleUrl: './accordion.css'
})
export class Accordion {
 
  @Input() items:any=[];

}
