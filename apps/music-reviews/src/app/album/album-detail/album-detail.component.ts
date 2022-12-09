import { ArtistService } from './../../services/artist.service';
import { Observable, Subscription } from 'rxjs';
import { Album } from './../../models/album.model';

import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../../services/album.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Artist } from '../../models/artist.model';
import { Review } from '../../models/review.model';

@Component({
  selector: 'music-review-app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css'],
})
export class AlbumDetailComponent implements OnInit {
  rating: number[] = [1, 2, 3, 4, 5];
  album!: Album;
  subs: Subscription = new Subscription();
  id!: string | null;
  userID!: string | undefined;
  owner!: User;
  artist!: Artist;
  reviewForm!: FormGroup;
  review!: Review;
  loggedInUser$!: Observable<User | undefined>;

  constructor(private albumService: AlbumService,
    private route: ActivatedRoute,
    private router: Router,
    public authService: AuthService,
    private userService: UserService,
    private artistService: ArtistService
  ) {

  }


  ngOnInit() {
    this.loggedInUser$ = this.authService.currentUser$;

    this.reviewForm = new FormGroup({
      title: new FormControl("", [
        Validators.required,
        Validators.minLength(3),
      ]),
      review: new FormControl("", [
        Validators.required,
        Validators.minLength(3),
      ]),
      rating: new FormControl(
        null, Validators.required
      )
    });


    this.subs.add(
      this.route.paramMap.subscribe((params) => {
        this.id = params.get('id')
      })
    )

    this.loadAlbum()



  }

  loadAlbum() {
    this.subs.add(
      this.albumService
        .getById(this.id)
        .pipe(

      )
        .subscribe((item) => {
          console.log(item, "Api return");
          this.album = item;
          this.userID = item.userId
          this.getOwner(this.userID)
          this.getArtist(item.artistId)
        }),

    );
  }
  getOwner(id: any) {
    this.subs.add(
      this.userService
        .getById(id).pipe(

      ).subscribe((item) => {
        console.log(item, "Owner")
        this.owner = item
      }

      )
    )
  }

  getArtist(id: any) {
    this.subs.add(
      this.artistService.getById(id).pipe(

      ).subscribe((item) => {
        this.artist = item
      }

      )
    )
  }

  public delete() {

    this.albumService.delete(this.id).subscribe()

    this.router.navigate(['/']);
  }
  onFormSubmitted() {
    this.review = this.reviewForm.value
    this.review.userName = this.authService.getCurrentUserName()
    this.review.userId = this.userID;
    console.log(this.review, "REview post")

    this.albumService.postReview(this.id, this.review).subscribe()
    this.reviewForm.reset()
    setTimeout(() => {

      this.album.reviews = undefined
      this.loadAlbum()
    }, 1000);


  }
  deleteReview(id: any) {
    // Remove last character of string
    console.log(id)
    this.albumService.deleteReview(this.id, id).subscribe()
    setTimeout(() => {

      this.album.reviews = undefined
      this.loadAlbum()
    }, 1000);
    this.loadAlbum()
  }

  ngOnDestroy(): void {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }

}


