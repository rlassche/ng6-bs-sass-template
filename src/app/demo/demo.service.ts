import { Injectable }                                from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  constructor( private http:HttpClient) { }

  version():string {
    console.log( "DemoService: version")
    return 'version 1.0, compile data=28-aug-2018'
  }
  renderWikiArticle( article:string) {
      console.log( "DemoService.renderWikiArticle: " + article)
      return this.http.get( "https://hp-probook/w/" + article, { responseType: 'text'})

  }
}
