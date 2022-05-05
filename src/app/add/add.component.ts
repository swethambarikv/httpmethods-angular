import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,FormBuilder,Validators,FormControlName } from '@angular/forms';  
import { Observable } from 'rxjs';  
import { Book } from '../Book';
import { bookService } from '../book.service';
import { ReactiveFormsModule} from '@angular/forms';
import{FormsModule } from '@angular/forms';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  title='Aspire Systems';  
datasaved=false;  
bookForm=new FormGroup({
  name:new FormControl(' ',[Validators.required]),  
    HRpartner:new FormControl(' ',[Validators.required]),  
    catogery:new FormControl(' ',[Validators.required])
  
});  
allbooks!:Observable<Book[]>;  
  
  constructor(private formbuilder:FormBuilder, private bookservice:bookService) { }  
ngOnInit(){  
  this.bookForm=this.formbuilder.group({  
    name:[' ',[Validators.required]],  
    HRpartner:[' ',[Validators.required]],  
    catogery:[' ',[Validators.required]]  
  
  });  
  this.getsoftBooks();  
}  
onFormSubmit(){  
  this.datasaved=false;  
  let book=this.bookForm.value;  
  this.createbooks(book);  
  this.bookForm.reset();  
}  
createbooks(book:Book){  
  this.bookservice.createbook(book).subscribe(book=>{  
    this.datasaved=true;  
    this.getsoftBooks();  
  
  })  
}  
 getsoftBooks(){  
this.allbooks=this.bookservice.getBooksFromStore();  
 }  
  
}  
