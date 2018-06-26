import { NewsItem } from '../app/modules/news/news-item';
import { Observable, of } from 'rxjs';

export class MockNewsService {
  newsItem: NewsItem = {
    id: 1,
    deleted: false,
    type: 'story',
    by: 'author',
    time: 1314211127,
    text: 'story text',
    dead: false,
    parent: 0,
    poll: 0,
    kids: [],
    url: 'http://www.google.com',
    score: 0,
    title: 'news story title',
    parts: [],
    descendeants: 0,
    comments: []
  };

  newsItemIds: number[] = [1, 2, 3, 4, 5];

  getBestStories(): Observable<number[]> {
    return of(this.newsItemIds);
  }

  getNewsItem(id: number): Observable<NewsItem> {
    return of(this.newsItem);
  }
}
