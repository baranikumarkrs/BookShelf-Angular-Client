import { Component } from '@angular/core';
import {BookServiceService} from "../service/book-service.service";
import {Book} from "../model/book/book";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-add-update-book-form',
  templateUrl: './add-update-book-form.component.html',
  styleUrls: ['./add-update-book-form.component.css']
})
export class AddUpdateBookFormComponent {

  protected book : Book
  protected file? : File
  protected imageSrc : string | undefined

  constructor(private bookService : BookServiceService,
              private activatedRoute : ActivatedRoute,
              private router : Router) {
      this.book = new Book();
  }

  public onSubmit(){

    console.log(this.book.name);
    console.log(this.book.author);

    function displayErrorMessage(s: string) {
      alert(s)
    }

    this.bookService.addBook(this.book, this.file).subscribe({
        next : (res: any) => {
          if (res != null)
            this.goToBookList()
          else
            displayErrorMessage("Unable to save the changes , Try again !")
        }, error : (err : any) => {
          displayErrorMessage(err.message)
        }, complete : () => {
          console.log('add req completed !!')
        }
      });

    }

  goToBookList() {
    this.router.navigate(['/books']);
  }

  onFileChange($event: any) {
    if(!$event.target.files)
      return

    this.file = $event.target.files.item(0);

    if(!this.file)
      return;

    const reader = new FileReader();
    reader.onload = (event) => {
      if(event.target)
        this.imageSrc = event.target.result as string;
    };
    reader.readAsDataURL(this.file);

  }
}


