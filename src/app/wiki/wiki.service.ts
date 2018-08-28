import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
//
// Subscribe and send new messages
//
@Injectable({
  providedIn: 'root'
})
export class WikiService {
  private subject = new Subject<any>();
  constructor(private http:HttpClient) { }
  sendMessage(message: string) {
    console.log('WikiService:sendMessage: '+message)
    this.subject.next({ text: message });
  }

  clearMessage() {
    console.log('WikiService:clearMessage')
    this.subject.next();
  }

  getMessage(): Observable<any> {
    console.log('WikiService:getMessage')
    return this.subject.asObservable();
  }
  renderWikiArticle( article:string) {
    console.log( "WikiService.renderWikiArticle: " + article)
    return this.http.get( "https://hp-probook/w/" + article, { responseType: 'text'})

}
}
