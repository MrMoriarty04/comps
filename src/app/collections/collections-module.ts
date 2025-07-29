import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectionsRoutingModule } from './collections-routing-module';
import { CollectionsHome } from './collections-home/collections-home';
import { Table } from './table/table';
import { SharedModule } from '../shared/shared-module';


@NgModule({
  declarations: [
    CollectionsHome,
    Table
  ],
  imports: [
    CommonModule,
    CollectionsRoutingModule,
    SharedModule
  ],
  exports:[]
})
export class CollectionsModule { }
