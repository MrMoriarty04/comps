import { Component ,Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-table',
  standalone: false,
  templateUrl: './table.html',
  styleUrl: './table.css'
})
export class Table implements OnInit {

  @Input("class") classNames="";
  @Input() data:any = [];
  @Input() headers:any = [];


  constructor(){}

  ngOnInit(){}
  
}
