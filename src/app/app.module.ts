import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AboutComponent } from './about/about.component';
import { ContacatComponent } from './contacat/contacat.component';
import { HomeComponent } from './home/home.component';
//import { AboutComponent} from './about/about.component/';
// other imports
import { ReactiveFormsModule } from '@angular/forms';
import { from } from 'rxjs';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AboutComponent,
    ContacatComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
       HttpClientModule,    // <-- Right here
       ReactiveFormsModule  // <- Add here



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
