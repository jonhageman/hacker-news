import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { NewsItem } from './news-item';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  beststoriesUrl = 'https://hacker-news.firebaseio.com/v0/beststories.json';
  newsItemUrl = 'https://hacker-news.firebaseio.com/v0/item';

  constructor(private http: HttpClient) {}

  getBestStories(): Observable<number[]> {
    return this.http
      .get<number[]>(this.beststoriesUrl)
      .pipe(catchError(this.handleError<any>('getBestStories')));
  }

  getNewsItem(id: number): Observable<NewsItem> {
    return this.http.get<NewsItem>(`${this.newsItemUrl}/${id}.json`).pipe(
      tap(newsItem => (newsItem.time = newsItem.time * 1000)),
      catchError(this.handleError<any>('getNewsItem'))
    );
  }

  private handleError<T>(result?: T) {
    return (error: HttpErrorResponse): Observable<T> => {
      console.error(error);

      return of(result as T);
    };
  }
}
