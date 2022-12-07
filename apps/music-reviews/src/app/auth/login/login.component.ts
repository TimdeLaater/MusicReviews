import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoginUser, User } from '../../models/user.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'music-review-app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit, OnDestroy {
  subs!: Subscription;
  loginForm!: FormGroup;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.subs = this.authService
      .getUserFromLocalStorage()
      .subscribe((user: User | undefined) => {
        if (user) {
          console.log('User already logged in > to dashboard');
          this.router.navigate(['/']);
        }
      });

    this.loginForm = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(3),
      ]),
    });
  }

  ngOnDestroy(): void {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }

  onFormSubmitted(): void {
    console.log(this.loginForm.value);
    this.authService
      .login(this.loginForm.value)
      .subscribe((user: User | undefined) => {
        if (user) {
          console.log('Logged in');
          this.router.navigate(['/']);
        }
        // this.submitted = false
      });
  }
}