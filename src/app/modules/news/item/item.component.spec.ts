import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MockComponent } from '../../../../helpers/mock-component';
import { NewsService } from '../news.service';
import { MockNewsService } from '../../../../helpers/mock-news.service';

import { ItemComponent } from './item.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('ItemComponent', () => {
  let component: ItemComponent;
  let fixture: ComponentFixture<ItemComponent>;
  let newsService: NewsService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
        ItemComponent,
        MockComponent({ selector: 'mat-spinner' }),
        MockComponent({ selector: 'app-comment-list', inputs: ['comments'] })
      ],
      providers: [{ provide: NewsService, useClass: MockNewsService }]
    }).compileComponents();
    newsService = TestBed.get(NewsService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
