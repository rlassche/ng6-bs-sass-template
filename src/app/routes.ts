import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DemoModule } from './demo/demo.module';
import { NocontentComponent } from './nocontent/nocontent.component';
export const routes: Routes = [
    { path: 'demo',        loadChildren: './demo/demo.module#DemoModule'   },
    { path: 'ngx-bootstrap',        loadChildren: './demo/demo.module#DemoModule'   },

    { path: '**',      component: NocontentComponent   }
];