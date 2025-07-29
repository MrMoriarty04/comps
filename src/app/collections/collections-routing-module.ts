import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionsHome } from './collections-home/collections-home';
import { Biography } from './biography/biography';
import { Companies } from './companies/companies';
import { Partners } from './partners/partners';

const routes: Routes = [
  {
    path:"",component:CollectionsHome,
    children:[
      {path:"",component:Biography},
      {path:"companies",component:Companies},
      {path:"partners",component:Partners}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollectionsRoutingModule { }
