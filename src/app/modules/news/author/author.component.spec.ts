import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MockComponent } from '../../../../helpers/mock-component';
import { NewsService } from '../news.service';
import { MockNewsService } from '../../../../helpers/mock-news.service';
import { AuthorService } from '../author.service';
import { MockAuthorService } from '../../../../helpers/mock-author.service';
import { RouterTestingModule } from '@angular/router/testing';

import { AuthorComponent } from './author.component';

describe('AuthorComponent', () => {
  let component: AuthorComponent;
  let fixture: ComponentFixture<AuthorComponent>;

  beforeEach(async(() => {
    let newsService: NewsService;
    let authorService: AuthorService;

    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
        AuthorComponent,
        MockComponent({ selector: 'mat-spinner' })
      ],
      providers: [
        { provide: AuthorService, useClass: MockAuthorService },
        { provide: NewsService, useClass: MockNewsService }
      ]
    }).compileComponents();
    newsService = TestBed.get(NewsService);
    authorService = TestBed.get(AuthorService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
