// Difference with AppModule
//  NO import of BrowserModule but CommonModule
//  Use property export
//  NO bootstrap

import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';
import { HttpClientModule }     from '@angular/common/http';
import { FormsModule }          from '@angular/forms';
import { RouterModule, Routes, Router } from '@angular/router';

import { DemoComponent } from './demo.component';

import { NgxBootstrapComponent } from './ngx-bootstrap/ngx-bootstrap.component';
import { WikiComponent } from './wiki/wiki.component';

import { DemoService} from './demo.service'
const routes: Routes = [
  { path: '', component : DemoComponent},
  { path: 'ngx-bootstrap', component : NgxBootstrapComponent},
  { path: 'wiki', component : WikiComponent},
]

@NgModule({
  imports: [
    CommonModule, 
    RouterModule.forChild(routes),
    FormsModule,
    HttpClientModule
  ],
  declarations: [DemoComponent, NgxBootstrapComponent, WikiComponent],
  exports:      [DemoComponent, NgxBootstrapComponent, WikiComponent,
            CommonModule, FormsModule, HttpClientModule],
  providers: [DemoService]
})
export class DemoModule { }
