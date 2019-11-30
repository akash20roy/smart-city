import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { LoginService } from "src/services/login";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  userLoggedIn: boolean;
  title = "smart-city-angular";
  constructor(private router: Router, private loginService: LoginService) {}
  login() {
    this.router.navigate(["/login"]);
  }
}
