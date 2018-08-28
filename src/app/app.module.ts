import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { AppRoutingModule } from './app-routing.module';

//import { RouterModule} from '@angular/router';
import { routes} from './routes';
//import { DemoModule } from './demo/demo.module'

import { WikiModule } from './wiki/wiki.module'


import { AppComponent } from './app.component';
import { NocontentComponent } from './nocontent/nocontent.component';

@NgModule({
  declarations: [
    AppComponent,
    NocontentComponent,
  ],
  imports: [
    BrowserModule, AppRoutingModule, FormsModule, WikiModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
