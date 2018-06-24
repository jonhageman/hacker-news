import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { ListComponent } from './list/list.component';
import { NewsService } from './news.service';
import { MatListModule } from '@angular/material/list';

@NgModule({
  imports: [CommonModule, NewsRoutingModule, MatListModule],
  declarations: [ListComponent],
  providers: [NewsService]
})
export class NewsModule {}
