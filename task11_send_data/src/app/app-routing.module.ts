import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',loadChildren:()=>import('src/app/authenticates/authenticates.module').then(mod=>mod.AuthenticatesModule)
  },
  {
    path:'auth',loadChildren:()=>import('src/app/authenticates/authenticates.module').then(mod=>mod.AuthenticatesModule)
  },
  {
    path:'otpsignup',loadChildren:()=>import('src/app/authenticates/authenticates.module').then(mod=>mod.AuthenticatesModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
