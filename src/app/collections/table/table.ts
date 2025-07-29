import { Component ,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  standalone: false,
  templateUrl: './table.html',
  styleUrl: './table.css'
})
export class Table implements OnInit {

  @Input() data:object = [];
  @Input() headers:object = [];

  constructor(){}

  ngOnInit(){}
  
}
