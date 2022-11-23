import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'music-review-app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css'],
})
export class UserEditComponent {
  user!: User;
  userform!: FormGroup
  id: string | null = null;


  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id')
      this.user = this.userService.getByid(Number(this.id))
    });
    this.userform = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      birthday: new FormControl('')
    })

  }
  onEdit() {
    this.userService.edit(this.id, this.userform.value)
    this.router.navigate(['/user']);
  }
}