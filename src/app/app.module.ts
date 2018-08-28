import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { AppRoutingModule } from './app-routing.module';

//import { RouterModule} from '@angular/router';
import { routes} from './routes';
import { NgxBootstrapComponent } from './demo/ngx-bootstrap/ngx-bootstrap.component'

import { WikiModule } from './wiki/wiki.module'


import { AppComponent } from './app.component';
import { NocontentComponent } from './nocontent/nocontent.component';
import { WikiComponent } from './demo/wiki/wiki.component';

@NgModule({
  declarations: [
    AppComponent,
    NocontentComponent,
    NgxBootstrapComponent,
    WikiComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, FormsModule, 
    WikiModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
