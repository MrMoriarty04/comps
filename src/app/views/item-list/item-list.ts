import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-list',
  standalone: false,
  templateUrl: './item-list.html',
  styleUrl: './item-list.css'
})
export class ItemList {

  @Input() itemsData:any=[];
}
