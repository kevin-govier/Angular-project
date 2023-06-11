import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Authorization': 'AIzaSyDZ2sm8RdPuhtrYVgfyqWbgjv3maRD0fIo'
  })
}

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private BASE_URL = 'https://www.googleapis.com/books/v1/volumes?q=';
  private API_KEY = 'AIzaSyDZ2sm8RdPuhtrYVgfyqWbgjv3maRD0fIo';

  constructor(private http: HttpClient) { }

  searchBooksByTitle(query: string): Observable<any>{

    const url = this.BASE_URL+query+"&key="+this.API_KEY;

    return this.http.get(url)
  }

}
