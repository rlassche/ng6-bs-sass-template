import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { AppRoutingModule } from './app-routing.module';

//import { RouterModule} from '@angular/router';
import { routes} from './routes';
import { DemoModule } from './demo/demo.module'


import { AppComponent } from './app.component';
import { NocontentComponent } from './nocontent/nocontent.component';

@NgModule({
  declarations: [
    AppComponent,
    NocontentComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, FormsModule, DemoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
