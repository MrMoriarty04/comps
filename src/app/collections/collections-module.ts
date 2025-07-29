import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectionsRoutingModule } from './collections-routing-module';
import { CollectionsHome } from './collections-home/collections-home';
import { Table } from './table/table';
import { SharedModule } from '../shared/shared-module';
import { Biography } from './biography/biography';
import { Companies } from './companies/companies';
import { Partners } from './partners/partners';



@NgModule({
  declarations: [
    CollectionsHome,
    Table,
    Biography,
    Companies,
    Partners
  ],
  imports: [
    CommonModule,
    CollectionsRoutingModule,
    SharedModule
  ],
  exports:[]
})
export class CollectionsModule { }
