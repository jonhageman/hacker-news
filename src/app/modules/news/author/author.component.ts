import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthorService } from '../author.service';
import { NewsItem } from '../news-item';
import { NewsService } from '../news.service';
import { User } from '../user';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  id: string;
  author: User;
  stories: Array<NewsItem> = [];
  authorErrMsg = '';
  isLoading = false;
  constructor(
    private route: ActivatedRoute,
    private authorService: AuthorService,
    private newsService: NewsService
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getAuthor();
  }

  getAuthor() {
    this.authorErrMsg = '';
    this.isLoading = true;
    if (this.id) {
      this.authorService.getAuthor(this.id).subscribe(
        author => {
          this.author = author;

          if (author.submitted) {
            for (let i = 0; i < 10; i++) {
              if (author.submitted[i]) {
                this.newsService
                  .getNewsItem(author.submitted[i])
                  .subscribe(story => {
                    if (
                      !story.deleted &&
                      story.type &&
                      story.type === 'story'
                    ) {
                      this.stories.push(story);
                    }
                  });
              }
            }
            // console.log(this.stories);
            this.isLoading = false;
          }
        },
        error => {
          this.isLoading = false;
          this.authorErrMsg = error;
        }
      );
    }
  }
}
