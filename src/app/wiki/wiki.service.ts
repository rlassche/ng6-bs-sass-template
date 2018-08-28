import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { WGARTICLEPATH } from './wiki_config'
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
    return this.http.get( WGARTICLEPATH + article, { responseType: 'text'})

}
}
