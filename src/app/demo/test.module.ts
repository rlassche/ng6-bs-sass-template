// Difference with AppModule
//  NO import of BrowserModule but CommonModule
//  Use property export
//  NO bootstrap

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestComponent } from './test.component';
import { RouterModule, Routes } from '@angular/router';
import { NgxBootstrapComponent } from './ngx-bootstrap/ngx-bootstrap.component';

//import { routing } from './test_routes';

const routes: Routes = [
  { path: '', component : TestComponent},
  { path: 'ngx-bootstrap', component : NgxBootstrapComponent},
]

@NgModule({
  imports: [
    CommonModule, 
 //   routing
    RouterModule.forChild(routes)
  ],
  declarations: [TestComponent, NgxBootstrapComponent],
//  exports: [TestComponent],
})
export class TestModule { }
