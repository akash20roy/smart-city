import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponentComponent } from "./login-component/login-component.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { LoginService } from "src/services/login";
import { StudentComponent } from "./student/student.component";
import { CategoryService } from "src/services/category-service";
import { ViewComponent } from "./view/view.component";
import { CreateComponent } from "./create/create.component";
import { EditComponent } from "./edit/edit.component";

const appRoutes: Routes = [
  { path: "login", component: LoginComponentComponent },
  { path: "student", component: StudentComponent },
  { path: "view", component: ViewComponent },
  { path: "create", component: CreateComponent },
  { path: "edit", component: EditComponent }
  // { path: "", component: AppComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    StudentComponent,
    ViewComponent,
    CreateComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [LoginService, CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule {}
