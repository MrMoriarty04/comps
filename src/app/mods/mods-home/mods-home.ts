import { Component } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  standalone: false,
  templateUrl: './mods-home.html',
  styleUrl: './mods-home.css'
})
export class ModsHome {

  showModal=false;

  ShowModalOnClick(){
    this.showModal = !this.showModal;
  }
}
