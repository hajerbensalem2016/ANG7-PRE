import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Other imports removed for brevity

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContacatComponent } from './contacat/contacat.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path:'contact',component:ContacatComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
