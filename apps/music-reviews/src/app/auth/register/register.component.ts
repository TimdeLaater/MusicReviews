import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from '../../models/user.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'music-review-app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit, OnDestroy {
  subs!: Subscription;
  registerForm!: FormGroup;

  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.subs = this.authService
      .getUserFromLocalStorage()
      .subscribe((user: User | undefined) => {
        if (user) {
          console.log('User already logged in > to dashboard');
          this.router.navigate(['/']);
        }
      });

    this.registerForm = this.formBuilder.group({
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
      ]),
    }) as FormGroup;
  }

  ngOnDestroy(): void {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }

  onSubmit(): void {
    console.log(this.registerForm.value)
    this.authService
      .register(this.registerForm.value)
      .subscribe((user: User | undefined) => {
        if (user) {
          console.log('user = ', user);
          this.router.navigate(['/']);
        }
      });
  }
}