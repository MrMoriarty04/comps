import { Component , ElementRef } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: false,
  templateUrl: './modal.html',
  styleUrl: './modal.css'
})
export class Modal {

  constructor(private el:ElementRef){ }

  ngOnInit(){
    document.body.appendChild(this.el.nativeElement);
  }

}
 