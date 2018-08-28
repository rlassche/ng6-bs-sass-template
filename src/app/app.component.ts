import { Component, OnInit } from '@angular/core';
import { WikiModule } from './wiki/wiki.module'
import { WikiService } from './wiki/wiki.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit { 

  title = 'AppComponent (in app.component)';
  art:string = 'HAM:HAM'

  constructor( private wiki:WikiModule, private wikiService:WikiService ) {
      console.log( "AppComponent.constuctor")

  }
  ngOnInit() {
    this.art = 'HAM:Weerstand'
    console.log( 'AppComponent.ngOnInit', this.art)
  }

  getWikiPage( ) {
    console.log( 'app.components.getWikiPage:art: ', this.art )
    this.wikiService.sendMessage( this.art)
  }
}
