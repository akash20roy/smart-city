import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { JsonPipe } from "@angular/common";

@Injectable()
export class LoginService {
  userRole: any;

  constructor(private http: HttpClient) {}

  loginSuccess(login) {
    return this.http.post(`http://localhost:8090/auth`, login);
  }
}
