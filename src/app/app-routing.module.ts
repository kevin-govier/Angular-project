import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookSearchComponent } from './bookSearch/bookSearch.component';

import { CollectionComponent } from './collection/collection.component';
import { RatingsComponent } from './ratings/ratings.component';
import { ReadingListComponent } from './readingList/readingList.component';

const routes: Routes = [
  {path:'',component:BookSearchComponent},
  { path: 'collection', component: CollectionComponent },
  { path: 'ratings', component: RatingsComponent },
  { path: 'readingList', component: ReadingListComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
