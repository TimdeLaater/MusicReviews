import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../models/user.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'music-review-app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  @Input() title: string = ''
  isNavbarCollapsed = true
  loggedInUser$!: Observable<User | undefined>;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.loggedInUser$ = this.authService.currentUser$;
    
  }

  logout(): void {
    this.authService.logout();
  }
}