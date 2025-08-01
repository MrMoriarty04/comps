import { Component , ElementRef , Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: false,
  templateUrl: './modal.html',
  styleUrl: './modal.css'
})
export class Modal {

  @Output() close=new EventEmitter();

  
  constructor(private el:ElementRef){ }

  ngOnInit(){
    document.body.appendChild(this.el.nativeElement);
  }

  ngOnDestroy(){
    this.el.nativeElement.remove();
  }

  OnCloseClickModal(){
    this.close.emit();
  }

}
 