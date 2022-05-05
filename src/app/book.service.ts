import { Injectable } from "@angular/core";
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Book } from "./Book";

@Injectable({
  providedIn:'root'
})
export class bookService{
  bookUrl="api/books"  
  
  constructor( private http:HttpClient) { }  
  
  createbook(book:Book):Observable<Book>{  
    let httpheaders=new HttpHeaders()  
    .set('Content-type','application/Json');  
    let options={  
      headers:httpheaders  
    };  
    return this.http.post<Book>(this.bookUrl,book,options);  
  }  
  
  getBooksFromStore():Observable<Book[]>{  
    return this.http.get<Book[]>(this.bookUrl);  
  }
}
