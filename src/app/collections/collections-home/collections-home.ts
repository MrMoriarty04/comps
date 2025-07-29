import { Component } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  standalone: false,
  templateUrl: './collections-home.html',
  styleUrl: './collections-home.css'
})
export class CollectionsHome {

  data=[
    {name:"Rami",age:"20",job:"Full-stack"},
    {name:"Amro",age:"21",job:"Front-end"},
    {name:"Osama",age:"20",job:"Back-end"}
  ];

  headers=[
    {key:"name", label:"Name"},
    {key:"age", label:"Age"},
    {key:"job", label:"Job"},
  ];

}
