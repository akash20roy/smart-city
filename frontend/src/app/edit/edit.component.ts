import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from "@angular/forms";
import { CategoryService } from "src/services/category-service";
import { Router } from "@angular/router";

@Component({
  selector: "app-edit",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.css"]
})
export class EditComponent implements OnInit {
  editForm: FormGroup;
  editRecord: any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private categoryService: CategoryService
  ) {
    this.editRecord = this.categoryService.recordToEdit;
  }

  ngOnInit() {
    this.editRecord = this.categoryService.recordToEdit;
    this.editForm = this.formBuilder.group({
      name: new FormControl(null, {
        validators: [Validators.required]
      }),
      location: new FormControl(null, {
        validators: [Validators.required]
      }),
      website: new FormControl()
    });
    this.fillTheForm();
  }

  fillTheForm() {
    this.editForm.patchValue({
      name: this.editRecord.name,
      location: this.editRecord.location,
      website: this.editRecord.website
    });
  }

  updateRecord() {
    alert(JSON.stringify(this.editForm.value, null, 2));
    this.categoryService.updateItem(this.editForm.value).subscribe(data => {
      this.router.navigate(["/student"]);
    });
  }
}
