import { Component, OnInit } from '@angular/core';
import { DemoService } from '../demo.service'
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'wiki',
  templateUrl: './wiki.component.html',
  styleUrls: ['./wiki.component.css']
})
export class WikiComponent implements OnInit {

  wiki_article = "HAM:HAM"
  renderedArticle = undefined;
  constructor(private service: DemoService) { }

  ngOnInit() {
    this.wiki_article = "HAM:HAM"
  }

  renderArticle() {
    let rv: string;
    console.log("renderArticle: ", this.wiki_article)
    rv = this.service.version();
    console.log('rv: ', rv)
    this.service.renderWikiArticle(this.wiki_article).subscribe(
      (data: string) => {
        //console.log( 'renderArticle: data:' + data )
        this.renderedArticle = data;
        console.log( data )
      },
      (error: HttpErrorResponse) => {
        console.log('renderArticle: error:')
        console.log(error)
      }
    )
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

      this.service.renderWikiArticle(nextArticle ).subscribe(
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
