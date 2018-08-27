import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';

//import { RouterModule} from '@angular/router';
import { routes} from './routes';


import { AppComponent } from './app.component';
import { NocontentComponent } from './nocontent/nocontent.component';

@NgModule({
  declarations: [
    AppComponent,
    NocontentComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
