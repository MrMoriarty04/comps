import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModsRoutingModule } from './mods-routing-module';
import { ModsHome } from './mods-home/mods-home';
import { Modal } from './modal/modal';
import { SharedModule } from "../shared/shared-module";


@NgModule({
  declarations: [
    ModsHome,
    Modal
  ],
  imports: [
    CommonModule,
    ModsRoutingModule,
    SharedModule
]
})
export class ModsModule { }
