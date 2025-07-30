import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { NotFound } from './not-found/not-found';

const routes: Routes = [
  {path:"elements", 
  loadChildren: () => import("./elements/elements-module")
  .then((m)=> m.ElementsModule)
},
  {path:"collections",
   loadChildren: ()=> import("./collections/collections-module")
   .then((m)=>m.CollectionsModule) 
  },

  {path:"views",
    loadChildren: () => import("./views/views-module")
    .then( (m) => m.ViewsModule )
  },
  
  {path:"",component:Home},
  {path:"**",component:NotFound}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
