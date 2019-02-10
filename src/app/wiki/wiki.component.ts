import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import {  WikiService } from './wiki.service'
import { HttpErrorResponse } from '@angular/common/http';

import { WGARTICLEPATH } from './wiki_config'
//
// This WikiComponent is able to RECEVIE messages
//
@Component({
  selector: 'media-wiki',
  templateUrl: './wiki.component.html',
  styleUrls: ['./wiki.component.css']
})
export class WikiComponent implements OnInit, OnDestroy {

  @Input( 'article' )
  article:string;

  @Input( 'debug' )
  debug:boolean = true;

  theWikiPage = ''
  renderedArticle:string = ''
  message: any;
  subscription: Subscription;

  constructor(private wikiService: WikiService) {
    this.subscription = this.wikiService.getMessage().subscribe(message => { 
        this.renderedArticle = message['text']
        this.message = message; 
        this.renderArticle( message['text'])
    });
   }

  ngOnInit() {
  }

  renderArticle( article:string) {
    let rv: string;
    this.wikiService.renderWikiArticle( article).subscribe(
      (data: string) => {
        this.renderedArticle = data;
        console.log( data )
      },
      (error: HttpErrorResponse) => {
        console.log(error)
      }
    )
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
  articleClick(e) {
    let wikiURLPrefix:string = WGARTICLEPATH;
    e.stopPropagation();
    let target = e.target || e.srcElement;
    if (target.nodeName == 'A') {
      console.log('DIT IS EEN A HREF, jump to ...', target.href )
      let href:string = target.href
      let start = href.indexOf( wikiURLPrefix )
      let nextArticle:string = href.substr( start + wikiURLPrefix.length )

      this.wikiService.renderWikiArticle(nextArticle ).subscribe(
        (data: string) => {
          this.renderedArticle = data;
        },
        (error: HttpErrorResponse) => {
          console.log(error)
        }
      )

    } else if (e.srcElement.className == 'toctext') {
      // Get all wiki headline's (=article chapters in h1, h2 etc.)
      let x = document.querySelectorAll(".mw-headline")

      for (let i = 0; i < x.length; i++) {
        if (x[i].innerHTML == e.target.innerHTML) {
          x[i].scrollIntoView(true)
          break;
        }
      }
    }

    return false;
  }

}
