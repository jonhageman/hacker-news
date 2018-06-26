import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  authorUrl = 'https://hacker-news.firebaseio.com/v0/user';
  constructor(private http: HttpClient) {}

  getAuthor(user: string): Observable<User> {
    return this.http
      .get<User>(`${this.authorUrl}/${user}.json`)
      .pipe(catchError(this.handleError<any>('getNewsItem')));
  }

  private handleError<T>(result?: T) {
    return (error: HttpErrorResponse): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
