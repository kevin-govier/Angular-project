import { Component } from '@angular/core';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-bookSearch',
  templateUrl: './bookSearch.component.html',
  styleUrls: ['./bookSearch.component.css']
})
export class BookSearchComponent {
  query: string;
  bookCoverUrls: string[] = [];
  totalItemCount: number;

  constructor(private bookService: BookService) { }

  searchBooks(): void {
    this.bookService.searchBooksByTitle(this.query)
      .subscribe(response => {
        const totalItems = response.totalItems;
        if (totalItems > 0) {
          const books = response.items.slice(0,20);
          this.bookCoverUrls = books.map(book => book.volumeInfo.imageLinks?.thumbnail);
        } else {
          this.bookCoverUrls = [];
        }
        this.totalItemCount = totalItems;
      });
  }
}
