import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { NewsItem } from '../news-item';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  newsIds: number[];
  newsItems: Array<NewsItem> = [];
  newsErrMsg: string;
  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.getTopTenBestStories();
  }

  private getTopTenBestStories() {
    this.newsErrMsg = '';
    this.newsService.getBestStories().subscribe(newsIds => {
      this.newsIds = newsIds;
      for (let i = 0; i < 10; i++) {
        this.newsService.getNewsItem(this.newsIds[i]).subscribe(item => {
          this.newsItems.push(item);
          console.log(item);
        });
      }
    }, error => (this.newsErrMsg = error));
  }
}
