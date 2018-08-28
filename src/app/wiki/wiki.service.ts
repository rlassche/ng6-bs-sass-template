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
    this.subject.next({ text: message });
  }

  clearMessage() {
    this.subject.next();
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }
  renderWikiArticle( article:string) {
    return this.http.get( "https://hp-probook/w/" + article, { responseType: 'text'})

}
}
