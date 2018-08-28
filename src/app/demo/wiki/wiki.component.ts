import { Component, OnInit } from '@angular/core';
import { WikiService } from '../..//wiki/wiki.service';

@Component({
  selector: 'app-wiki',
  templateUrl: './wiki.component.html',
  styleUrls: ['./wiki.component.css']
})
export class WikiComponent implements OnInit {
  art:string = 'HAM:HAM'
  constructor(private wikiService:WikiService) { }

  ngOnInit() {
  }

  getWikiPage( ) {
    console.log( 'app.components.getWikiPage:art: ', this.art )
    this.wikiService.sendMessage( this.art)
  }
}
