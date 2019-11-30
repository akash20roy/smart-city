import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { JsonPipe } from '@angular/common';

@Injectable()
export class CategoryService {
  loggedIn: boolean;
  userLoogedIn = new Subject<any>();
  categoryToAdd = {};
  categoryType: any;
  recordToView: any;
  recordToEdit: any;

  constructor(private http: HttpClient) {}

  getCategories(categoryType: any) {
    return this.http.get(
      `http://localhost:8090/list?categoryType=${categoryType}`
    );
  }

  saveItem(item: any) {
    item.categoryType = this.categoryType;
    return this.http.post(`http://localhost:8090`, item);
  }

  updateItem(item: any) {
    item.categoryType = this.categoryType;
    item.id = this.recordToEdit.Id;
    item.oldName = this.recordToEdit.name;
    alert(`Record to Edit -- ${JSON.stringify(item, null, 2)}`);
    return this.http.post(`http://localhost:8090/update`, item);
  }

  deleteRecord(item: any) {
    alert(`Delete Item -- ${JSON.stringify(item)}`);
    return this.http.post(`http://localhost:8090/delete`, item);
  }
}
