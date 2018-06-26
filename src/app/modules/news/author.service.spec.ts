import { TestBed, inject } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

import { AuthorService } from './author.service';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { User } from './user';

describe('AuthorService', () => {
  let httpTestingController: HttpTestingController;
  let authorService: AuthorService;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthorService, HttpClient]
    });
    httpTestingController = TestBed.get(HttpTestingController);
    authorService = TestBed.get(AuthorService);
    httpClient = TestBed.get(HttpClient);
  });

  it('should be created', inject([AuthorService], (service: AuthorService) => {
    expect(service).toBeTruthy();
  }));

  describe('#getAuthor', () => {
    it('should get the author of the given id', () => {
      const author: User = {
        id: 'author',
        delay: 0,
        created: 0,
        karma: 0,
        about: 'about this author',
        submitted: []
      };

      authorService
        .getAuthor('author')
        .subscribe(result => expect(result).toEqual(author), fail);

      const req = httpTestingController.expectOne(
        `${authorService.authorUrl}/author.json`
      );
      expect(req.request.method).toEqual('GET');

      const expectedResponse = new HttpResponse({
        status: 200,
        statusText: 'OK',
        body: author
      });
      req.event(expectedResponse);
    });
  });
});
