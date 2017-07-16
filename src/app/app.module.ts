import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule }   from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found.component';
import { Demo1Module } from './demo1/demo1.module';
import { Demo2Module } from './demo2/demo2.module';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Demo1Module,
    Demo2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
