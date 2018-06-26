import { Component, OnInit, Input } from '@angular/core';
import { NewsItem } from '../../news-item';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {
  @Input() comments: NewsItem[];
  constructor() {}

  ngOnInit() {}
}
