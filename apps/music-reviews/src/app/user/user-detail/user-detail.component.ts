import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
    selector: 'music-review-app-user-detail',
    templateUrl: './user-detail.component.html',
    styleUrls: ['./user-detail.component.css'],
})
export class UserDetailComponent {

    user: User | null = null;
    id: string | null = null;
    constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) {

    }
    ngOnInit() {
        this.route.paramMap.subscribe((params) => {
            this.id = params.get('id')
            this.user = this.userService.getByid(Number(this.id))
        });

    }
    public delete() {
        console.log('we zijn hier')
        this.userService.delete(this.id)

        this.router.navigate(['/user']);
    }
}