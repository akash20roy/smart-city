import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from "@angular/forms";
import { LoginService } from "src/services/login";
import { Router } from "@angular/router";

@Component({
  selector: "app-login-component",
  templateUrl: "./login-component.component.html",
  styleUrls: ["./login-component.component.css"]
})
export class LoginComponentComponent implements OnInit {
  loginForm: FormGroup;
  validationMsg: any;
  loggedIn: boolean;
  userLoggedIn: any;
  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {
    this.validationMsg = {
      username: [{ type: "required", message: "Email is required" }],
      password: [{ type: "required", message: "Password is required" }]
    };
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: new FormControl(null, {
        validators: [Validators.required],
        updateOn: "blur"
      }),
      password: new FormControl(null, {
        validators: [Validators.required],
        updateOn: "blur"
      })
    });
  }

  loginSuccess() {
    this.loginService.loginSuccess(this.loginForm.value).subscribe(
      data => {
        this.userLoggedIn = data;
        this.loggedIn = true;
        this.loginService.userRole = this.userLoggedIn.role;
        this.router.navigate([`/student`]);
      },
      error => {
        this.loggedIn = false;
        console.log(error);
      }
    );
  }
}
