import { User } from '../app/modules/news/user';
import { Observable, of } from 'rxjs';

export class MockAuthorService {
  author: User = {
    id: 'author',
    delay: 0,
    created: 0,
    karma: 0,
    about: 'about this author',
    submitted: []
  };

  newsItemIds: number[] = [1, 2, 3, 4, 5];

  getBestStories(): Observable<number[]> {
    return of(this.newsItemIds);
  }

  getNewsItem(id: number): Observable<User> {
    return of(this.author);
  }
}
