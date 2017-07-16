
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found.component';
import { AppComponent } from './app.component';
import { Demo1Component } from './demo1/demo1.component';
import { Demo2Component } from './demo2/demo2.component';

export const routes: Routes = [
	{ path: 'demo1', component: Demo1Component },
    { path: '', redirectTo: 'demo1', pathMatch: 'full'},
    { path: 'demo2', component: Demo2Component },
    { path: 'home', component: AppComponent },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}