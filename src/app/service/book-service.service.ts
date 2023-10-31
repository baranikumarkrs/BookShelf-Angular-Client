import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Book } from "../model/book/book";
import {Observable} from "rxjs";
import {BookThumbnail} from "../model/book-thumbail/book-thumbnail";
// import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  public header = new HttpHeaders({
    'Access-Control-Allow-Origin' : 'http://localhost:4200',
    'Access-Control-Allow-Methods' : 'PUT,GET,POST,DELETE',
    'Access-Control-Allow-Headers' : 'origin, x-requested-with, content-type, accept'
  });

  public options = { headers : this.header};

  private apiHost = "http://localhost:9090";
  constructor(private http : HttpClient) { }

  public findAll(): Observable<Book[]>{
    return this.http.get<Book[]>(this.apiHost + '/getAllBooks', this.options)
  }

  // public storeBookCover(image: File): Observable<BookThumbnail>{
  //
  //   const formData = new FormData();
  //   formData.append('bookCover',image);
  //
  //   return this.http.post<BookThumbnail>(this.apiHost + '/storeBookCover', formData, {
  //     headers : this.header,
  //     reportProgress: true,
  //   })
  // }

  public addBook(book: Book, file: File | undefined): Observable<Book>{

    const formData = new FormData();
    formData.append('bookName',book.name == null ? '' : book.name);
    formData.append('bookAuthor',book.author == null ? '' : book.author)

    if(file != null)
      formData.append('bookCover',file);


    return this.http.post<Book>(this.apiHost + '/addBook',formData,{
      headers : this.header,
      reportProgress: true,
    });
  }

  public deleteBookById(bookId : bigint){
    return this.http.delete(this.apiHost + '/deleteBookById/' + bookId,this.options);
  }

  public updateBookById(book : Book){
    return this.http.post<Book>(this.apiHost + '/updateBookById' ,book, this.options);
  }

  public findBooksByNameContaining(bookName : string){
    return this.http.get<Book>(this.apiHost + '/getBooksByNameContaining/' + bookName, this.options);
  }



}
