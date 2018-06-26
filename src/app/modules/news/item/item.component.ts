import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from '../news.service';
import { NewsItem } from '../news-item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  id: number;
  newsItem: NewsItem;
  isLoading = false;
  itemErrMsg = '';
  constructor(
    private route: ActivatedRoute,
    private newsService: NewsService
  ) {}

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.getNewsItem();
  }

  getNewsItem() {
    this.itemErrMsg = '';
    this.isLoading = true;
    if (this.id) {
      this.newsService.getNewsItem(this.id).subscribe(
        item => {
          this.newsItem = item;
          this.newsItem.comments = [];
          if (this.newsItem.kids) {
            for (let i = 0; i < 10; i++) {
              if (item.kids[i]) {
                this.newsService
                  .getNewsItem(item.kids[i])
                  .subscribe(comment => {
                    if (comment && !comment.deleted) {
                      // console.log(comment);
                      this.newsItem.comments.push(comment);
                    }
                  });
              }
            }
            this.isLoading = false;
          }
        },
        error => {
          this.isLoading = false;
          this.itemErrMsg = error;
        }
      );
    }
  }
}
