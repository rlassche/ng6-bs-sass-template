// Difference with AppModule
//  NO import of BrowserModule but CommonModule
//  Use property export
//  NO bootstrap

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoComponent } from './demo.component';
import { RouterModule, Routes } from '@angular/router';
import { NgxBootstrapComponent } from './ngx-bootstrap/ngx-bootstrap.component';


const routes: Routes = [
  { path: '', component : DemoComponent},
  { path: 'ngx-bootstrap', component : NgxBootstrapComponent},
]

@NgModule({
  imports: [
    CommonModule, 
 //   routing
    RouterModule.forChild(routes)
  ],
  declarations: [DemoComponent, NgxBootstrapComponent],
})
export class DemoModule { }
