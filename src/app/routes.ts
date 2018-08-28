import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NocontentComponent } from './nocontent/nocontent.component';
import { NgxBootstrapComponent } from './demo/ngx-bootstrap/ngx-bootstrap.component'
import { WikiComponent } from './demo/wiki/wiki.component';

export const routes: Routes = [
    { path: 'ngx-bootstrap',        component: NgxBootstrapComponent   },
    { path: 'wiki',        component: WikiComponent },
    { path: '**',      component: NocontentComponent   }
];