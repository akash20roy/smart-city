import { Component, OnInit } from "@angular/core";
import { CategoryService } from "src/services/category-service";

@Component({
  selector: "app-view",
  templateUrl: "./view.component.html",
  styleUrls: ["./view.component.css"]
})
export class ViewComponent implements OnInit {
  recordToView: any;
  constructor(private categoryService: CategoryService) {
    this.recordToView = this.categoryService.recordToView;
  }

  ngOnInit() {
    this.recordToView = this.categoryService.recordToView;
  }
}
