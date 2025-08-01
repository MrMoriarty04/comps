import { Component } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  standalone: false,
  templateUrl: './mods-home.html',
  styleUrl: './mods-home.css'
})
export class ModsHome {

  showModal=false;
  items:any=[
    {title:"why is the sky blue?", content:"the sky is blue because it is"},
    {title:"what does orange taste like?", content:"an orange taste like an orange duh"},
    {title:"why the fire is lovley", content:"because it gives us worm"}
  ];

  ShowModalOnClick(){
    this.showModal = !this.showModal;
  }
}
