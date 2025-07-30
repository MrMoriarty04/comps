import { Component } from '@angular/core';

@Component({
  selector: 'app-views-home',
  standalone: false,
  templateUrl: './views-home.html',
  styleUrl: './views-home.css'
})
export class ViewsHome {

  stats=[
    {value:300,label:"Users"},
    {value:12100,label:"Views"},
    {value:643,label:"Reviews"}
  ];

  items=[
    {imageUrl:"./couch.jpeg",title:"Couch",description:"the most wonderfull couch in the world"},
    {imageUrl:"./dresser.jpeg",title:"Dresser",description:"its just a dresser what do you expect"}
  ];
}
