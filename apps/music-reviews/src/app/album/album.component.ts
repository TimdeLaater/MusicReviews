import { AlbumService } from './../services/album.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Album } from '../models/album.model';
import { catchError, Observable, Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { User } from '../models/user.model';

@Component({
  selector: 'music-review-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css'],
})
export class AlbumComponent implements OnInit, OnDestroy {
  albums!: Album[];
  subs: Subscription = new Subscription();
  loggedInUser$!: Observable<User | undefined>;
  constructor(
    private albumservice: AlbumService,
    private authService: AuthService
  ) {

  }


  ngOnInit() {
    this.loggedInUser$ = this.authService.currentUser$;


    this.subs.add(
      this.albumservice
        .getAll()
        .pipe(

      )
        .subscribe((items) => {
          console.log(items, "Api return");
          this.albums = items;
          console.log(this.albums, "Dit gaat naar html")
        })
    );

  }

  ngOnDestroy(): void {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }

}
