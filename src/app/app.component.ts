import { Component } from '@angular/core';
import { BookServiceService as BookService } from './service/book-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

title = "BookShelf";

constructor(private bookService : BookService){}

}




