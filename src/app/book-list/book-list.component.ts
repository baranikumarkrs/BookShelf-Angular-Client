import {Component} from '@angular/core';
import {Book} from "../model/book/book";
import {BookServiceService} from "../service/book-service.service";
import {catchError, Observable, throwError} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";
import {Binary} from "bson";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {

  bookList : Book[] = [];

  constructor(private bookService : BookServiceService) {
  }

  private handleError(err : HttpErrorResponse) : Observable<any>{
    let errorMessage = 'Error Message : ' + err.error.message;
    console.error(err);
    return throwError(() => errorMessage);
  }

  ngOnInit(){
    this.bookService.findAll().pipe(
      catchError(this.handleError)
    ).subscribe((data : Book[]) => {
      this.bookList = data;
    })
  };

  getBookCoverSrc(bookThumbnail: any) : string {

    return 'data:image/png;base64,'+bookThumbnail.data.toString();
  }
}
