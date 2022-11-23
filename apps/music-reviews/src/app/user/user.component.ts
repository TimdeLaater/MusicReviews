import { UserService } from '../services/user.service';
import { Component, OnInit } from '@angular/core'
import { User } from '../models/user.model';


@Component({
  selector: 'music-review-user',
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {
  users: User[] = []
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.users = this.userService.get();
  }
}


