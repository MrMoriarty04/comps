import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
    Times
  ],
  exports:[]
})
export class ElementsModule { }
