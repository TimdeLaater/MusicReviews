import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'music-review-app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css'],
})
export class UserEditComponent implements OnInit {
  subs: Subscription = new Subscription();
  userId: any;
  user!: any;
  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
  ) {

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.userId = params.get('id');
      if (this.userId) {
        // Bestaande artiest
        this.subs.add(
          this.userService
            .getById(this.userId)
            .pipe(

          )
            .subscribe((item) => {
              // console.log(item, "Api return");
              this.user = item;
            })
        );
      }
    });
  }
}
