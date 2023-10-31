import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BookListComponent} from "./book-list/book-list.component";
import {AddUpdateBookFormComponent} from "./add-update-book-form/add-update-book-form.component";

const routes: Routes = [

  {path : 'books', component : BookListComponent},
  {path : 'addBook', component : AddUpdateBookFormComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
