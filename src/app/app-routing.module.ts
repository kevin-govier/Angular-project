import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookSearchComponent } from './bookSearch/bookSearch.component';

import { CollectionComponent } from './collection/collection.component';
import { RatingsComponent } from './ratings/ratings.component';
import { ReadingListComponent } from './readingList/readingList.component';

import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {path:'', pathMatch: 'full', component:LandingComponent},
  {path:'bookSearch', component:BookSearchComponent},
  { path: 'collection', component: CollectionComponent },
  { path: 'ratings', component: RatingsComponent },
  { path: 'readingList', component: ReadingListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
