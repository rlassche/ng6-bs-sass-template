import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule }     from '@angular/common/http';
import { WikiComponent } from './wiki.component';
import { WikiService} from './wiki.service';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [WikiComponent],
  exports: [WikiComponent],
  providers: [WikiService]
})
export class WikiModule { 
  public static forRoot(): ModuleWithProviders {
    return { ngModule: WikiModule, providers: [WikiService]}
  }
}
