import { Component, OnInit } from '@angular/core';
import { Book } from '../Book';
import { bookService } from '../book.service';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
@Component({
  selector: 'app-show-data',
  templateUrl: './show-data.component.html',
  styleUrls: ['./show-data.component.scss']
})
export class ShowDataComponent implements OnInit {

  title='Aspire Systems';  
  softBooks!: Book[];  
  constructor(private bookservice:bookService) { }  
  
  ngOnInit(){  
  
    this.getsoftBooks();  
  
  }  
getsoftBooks(){  
  this.bookservice.getBooksFromStore().subscribe(books => this.softBooks=books);  
}  

}
