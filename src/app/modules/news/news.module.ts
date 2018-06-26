import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { ListComponent } from './list/list.component';
import { NewsService } from './news.service';
import { MatListModule } from '@angular/material/list';
import { ItemComponent } from './item/item.component';
import { CommentListComponent } from './item/comment-list/comment-list.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AuthorComponent } from './author/author.component';
import { AuthorService } from './author.service';

@NgModule({
  imports: [
    CommonModule,
    NewsRoutingModule,
    MatListModule,
    MatProgressSpinnerModule
  ],
  declarations: [
    ListComponent,
    ItemComponent,
    CommentListComponent,
    AuthorComponent
  ],
  providers: [NewsService, AuthorService]
})
export class NewsModule {}
