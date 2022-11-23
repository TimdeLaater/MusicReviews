import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';
import { UserService } from '../user.service';


@Component({
  selector: 'music-review-app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css'],
})
export class UserAddComponent implements OnInit {
  user!: User;
  userform!: FormGroup




  constructor(private UserService: UserService, private router: Router) { }

  ngOnInit() {
    this.userform = new FormGroup({
      // name: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      birthday: new FormControl(''),
      name: new FormControl('', Validators.required)
    })

  }
  get name() { return this.userform.get('name'); }

  onSubmit() {
    this.UserService.add(this.userform.value)
    this.router.navigate(['/user']);
  }

}
