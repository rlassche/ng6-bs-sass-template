import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import {  WikiService } from './wiki.service'
import { HttpErrorResponse } from '@angular/common/http';

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

  renderedArticle:string = 'leeg'
  message: any;
  subscription: Subscription;

  constructor(private wikiService: WikiService) {
    console.log( 'WikiComponent.constructor', this.article)
    this.subscription = this.wikiService.getMessage().subscribe(message => { 
        console.log( 'WikiComponent: received message from the wikiService:'+message['text'])
        this.renderedArticle = message['text']
        this.message = message; 
        this.renderArticle( message['text'])
    });
   }

  ngOnInit() {
    console.log( 'WikiComponent.ngOnInit', this.article)
  }



  renderArticle( article:string) {
    console.log( 'WikiComponent.renderArticle: getting and rendering: ', article)
    let rv: string;
    this.wikiService.renderWikiArticle( article).subscribe(
      (data: string) => {
        console.log( 'renderArticle: data:' + data )
        this.renderedArticle = data;
        console.log( data )
      },
      (error: HttpErrorResponse) => {
        console.log('renderArticle: error:')
        console.log(error)
      }
    )
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
  articleClick(e) {
    let wikiURLPrefix:string = "https://hp-probook/w/"
    e.stopPropagation();
    let target = e.target || e.srcElement;
    console.log('className=', e.srcElement.className)
    console.log('target: ', target)
    console.log('target.nodeName: ', target.nodeName)
    if (target.nodeName == 'A') {
      console.log('DIT IS EEN A HREF, jump to ...', target.href )
      let href:string = target.href
      let start = href.indexOf( wikiURLPrefix )
      console.log( 'YES copy from: ', start + wikiURLPrefix.length )
      let nextArticle:string = href.substr( start + wikiURLPrefix.length )
      console.log( 'next art: ', nextArticle ) ;

      this.wikiService.renderWikiArticle(nextArticle ).subscribe(
        (data: string) => {
          //console.log( 'renderArticle: data:' + data )
          this.renderedArticle = data;
        },
        (error: HttpErrorResponse) => {
          console.log('renderArticle: error:')
          console.log(error)
        }
      )

    } else if (e.srcElement.className == 'toctext') {
      console.log( 'toctext found. Jump to ', e.target.innerHTML)
      // Get all wiki headline's (=article chapters in h1, h2 etc.)
      let x = document.querySelectorAll(".mw-headline")

      for (let i = 0; i < x.length; i++) {
        //console.log( 'current='+x[i].innerHTML, ', moet naar: ', e.target.innerHTML )  
        if (x[i].innerHTML == e.target.innerHTML) {
          x[i].scrollIntoView(true)
          break;
        }
      }
    }

    return false;
  }

}
