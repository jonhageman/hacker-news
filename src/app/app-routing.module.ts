import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsGuard } from './guards/news.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'news',
    loadChildren: './modules/news/news.module#NewsModule',
    data: { preload: true },
    canActivate: [NewsGuard]
  },
  { path: '', pathMatch: 'full', redirectTo: 'news' },
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
