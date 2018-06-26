import { TestBed, inject } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

import { NewsService } from './news.service';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { NewsItem } from './news-item';

describe('NewsService', () => {
  let httpTestingController: HttpTestingController;
  let newsService: NewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [NewsService, HttpClient]
    });

    httpTestingController = TestBed.get(HttpTestingController);
    newsService = TestBed.get(NewsService);
  });

  it('should be created', inject([NewsService], (service: NewsService) => {
    expect(service).toBeTruthy();
  }));

  describe('#getBestStories()', () => {
    it('should get the list of ids of the best stories', () => {
      const newsItemIds = [1, 2, 3, 4, 5];

      newsService
        .getBestStories()
        .subscribe(result => expect(result).toEqual(newsItemIds), fail);

      const req = httpTestingController.expectOne(newsService.beststoriesUrl);
      expect(req.request.method).toEqual('GET');

      const expectedResponse = new HttpResponse({
        status: 200,
        statusText: 'OK',
        body: newsItemIds
      });
      req.event(expectedResponse);
    });
  });

  describe('#getNewsItem()', () => {
    it('should get the news item of the given id', () => {
      const newsItem: NewsItem = {
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

      newsService
        .getNewsItem(1)
        .subscribe(result => expect(result).toEqual(newsItem), fail);

      const req = httpTestingController.expectOne(
        `${newsService.newsItemUrl}/1.json`
      );
      expect(req.request.method).toEqual('GET');

      const expectedResponse = new HttpResponse({
        status: 200,
        statusText: 'OK',
        body: newsItem
      });
      req.event(expectedResponse);
    });
  });
});
