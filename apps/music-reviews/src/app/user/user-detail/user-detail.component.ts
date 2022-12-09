import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
@Component({
  selector: 'music-review-app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
})
export class UserDetailComponent implements OnInit {
  user$!: Observable<User>;
  userId!: string;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
    public authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.user$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.userService.getById(params.get('id')))

    );
  }

  delete() {
    this.userService.delete(this.authService.getCurrentUserId()).subscribe()
    this.authService.logout();
  }

}
