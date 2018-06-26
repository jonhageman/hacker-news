import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { AuthorComponent } from './author/author.component';

const routes: Routes = [
  { path: '', component: ListComponent },
  {
    path: ':id',
    component: ItemComponent
  },
  { path: 'author/:id', component: AuthorComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule {}
