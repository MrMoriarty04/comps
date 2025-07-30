import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared-module';
import { ViewsRoutingModule } from './views-routing-module';
import { ViewsHome } from './views-home/views-home';
import { Statistics } from './statistics/statistics';
import { ItemList } from './item-list/item-list';


@NgModule({
  declarations: [
    ViewsHome,
    Statistics,
    ItemList
  ],
  imports: [
    CommonModule,
    ViewsRoutingModule,
    SharedModule
  ]
})
export class ViewsModule { }
