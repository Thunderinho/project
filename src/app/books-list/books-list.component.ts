import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {AngularFirestore} from "node_modules/@angular/fire/firestore";

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {

  books: Observable<any[]>;

  constructor(store: AngularFirestore) {
    this.books = store.collection('books').valueChanges();
  }

  ngOnInit(): void {
  }

}
