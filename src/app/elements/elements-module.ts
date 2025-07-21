import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { SharedModule } from '../shared/shared-module';
import { ElementsRoutingModule } from './elements-routing-module';
import { ElementsHome } from './elements-home/elements-home';
import { Placeholder } from './placeholder/placeholder';
import { Times } from './times';


@NgModule({
  declarations: [
    ElementsHome,
    Placeholder,
    
  ],
  imports: [
    CommonModule,
    ElementsRoutingModule,
    SharedModule,
    Times
  ],
  exports:[]
})
export class ElementsModule { }
