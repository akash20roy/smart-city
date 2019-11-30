import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/services/category-service';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from '@angular/forms';
import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  createForm: FormGroup;

  constructor(
    private categoryService: CategoryService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.createForm = this.formBuilder.group({
      name: new FormControl(null, Validators.required),
      location: new FormControl(null, Validators.required),
      website: new FormControl()
    });
  }

  createItem() {
    this.categoryService.saveItem(this.createForm.value).subscribe(
      data => {
        this.router.navigate(['/student']);
      },
      err => {
        alert('error');
      }
    );
  }
}

interface item {
  name: any;
  location: any;
  website: any;
}
