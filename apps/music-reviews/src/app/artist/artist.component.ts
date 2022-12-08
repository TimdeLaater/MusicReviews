import { AuthService } from './../services/auth.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

import { Artist } from './../models/artist.model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { catchError, Observable, Subscription } from 'rxjs';
import { ArtistService } from '../services/artist.service';
import { User } from '../models/user.model';

@Component({
  selector: 'music-review-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css'],
})
export class ArtistComponent implements OnInit, OnDestroy {
  artists!: Artist[];
  subs: Subscription = new Subscription();
  loggedInUser$!: Observable<User | undefined>;

  constructor(
    private artistService: ArtistService,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService

  ) {

  }


  ngOnInit() {
    this.loggedInUser$ = this.authService.currentUser$;

    this.subs.add(
      this.artistService
        .getAll()
        .pipe(

      )
        .subscribe((items: Artist[]) => {
          console.log(items, "Api return");
          this.artists = items;

        })
    );

    // console.log("stap 1")
    // this.albumservice.getAll().subscribe((albumList) => {
    //   console.log(albumList, "wel hier")
    //   this.albums = albumList
    // })
    // this.albumservice.getAll().subscribe((res: Album[]) => this.albums = res)
    // this.albums = this.albumservice.getTestList();
  }

  ngOnDestroy(): void {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }

}