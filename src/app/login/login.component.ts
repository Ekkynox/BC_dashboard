import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  password: string;
  user: string;
  hide: boolean;

  constructor(public serviceAuth: AuthService, private router: Router) {
    this.password = "";
    this.user = "";
    this.hide = true;
  }

  ngOnInit(): void {
  }

  sendForm(form: NgForm) {
    this.serviceAuth.checkAuth(this.user, this.password).then(res => {
      if (res == true) {
        this.router.navigate(["dashboard"]);
      }
    });
  }
}
