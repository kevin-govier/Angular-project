import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { BookSearchComponent } from './bookSearch/bookSearch.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BookService } from './services/book.service';
import {MatTabsModule} from '@angular/material/tabs';
import { TabsComponent } from './tabs/tabs.component';
import { CollectionComponent } from './collection/collection.component';
import { RatingsComponent } from './ratings/ratings.component';
import { ReadingListComponent } from './readingList/readingList.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BookSearchComponent,
    TabsComponent,
    CollectionComponent,
    RatingsComponent,
    ReadingListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    AppRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule,
    MatTabsModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
