import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowDataComponent } from './show-data/show-data.component';


import { Book } from './Book';
import { bookService } from './book.service';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { TestData } from './testdata';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { Routes,RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';

const routes: Routes = [  
  {path:'', component:ShowDataComponent},  
  { path:'add', component:AddComponent}  
]; 
@NgModule({
  declarations: [
    AppComponent,
    ShowDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    FormsModule,  
    HttpClientModule, 
    InMemoryWebApiModule.forRoot(TestData) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
