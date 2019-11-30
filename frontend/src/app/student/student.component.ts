import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/services/login';
import { CategoryService } from 'src/services/category-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  records: any;
  role: any;
  catType: any;
  constructor(
    private loginService: LoginService,
    private categoryService: CategoryService,
    private router: Router
  ) {
    this.role = this.loginService.userRole;
  }

  ngOnInit() {
    if (this.categoryService.categoryType) {
      this.getRecords(this.categoryService.categoryType);
    }
  }

  componentDidMount() {}

  getRecords(categoryType) {
    this.catType = categoryType;
    this.categoryService.getCategories(categoryType).subscribe(
      data => {
        this.records = data;
      },
      error => {
        alert('Oops..!!! Something Went Wrong.. Please Try again..');
      }
    );
  }

  createItem(categoryType: any) {
    this.categoryService.categoryType = categoryType;
    this.router.navigate(['/create']);
  }

  viewRecord(record) {
    this.categoryService.recordToView = record;
    this.router.navigate(['/view']);
  }

  redirect(url: any) {
    window.open(url, '_blank');
  }

  deleteRecord(record) {
    this.categoryService.deleteRecord(record).subscribe(
      data => {
        this.getRecords(this.catType);
      },
      err => {
        alert(`Error in Deleting record`);
      }
    );
  }

  editRecord(record) {
    this.categoryService.recordToEdit = record;
    this.router.navigate(['/edit']);
  }
}
