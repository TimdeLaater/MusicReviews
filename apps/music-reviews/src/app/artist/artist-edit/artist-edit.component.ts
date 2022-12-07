
import { Genre } from './../../models/genre.enum';

import { Artist } from './../../models/artist.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ArtistService } from '../../services/artist.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'music-review-app-artist-edit',
  templateUrl: './artist-edit.component.html',
  styleUrls: ['./artist-edit.component.css'],
})
export class ArtistEditComponent implements OnInit {
  artistId: string | null = null;
  artist!: Artist;
  keys = Object.values;
  artistForm!: FormGroup
  genres = Genre;
  subs: Subscription = new Subscription();
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private artistService: ArtistService,
    private authService: AuthService,

  ) { }


  ngOnInit(): void {
    console.log(this.genres)
    this.route.paramMap.subscribe((params) => {
      this.artistId = params.get('id');
      if (this.artistId) {
        // Bestaande artiest
        this.subs.add(
          this.artistService
            .getById(this.artistId)
            .pipe(

          )
            .subscribe((item) => {
              // console.log(item, "Api return");
              this.artist = item;
            })
        );
      }
    });
    this.artistForm = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      genre: new FormControl('', Validators.required),
      birthday: new FormControl('', Validators.required),
      coverImg: new FormControl('', Validators.required),


    });
  }



  onSubmit() {
    console.log('Hier komt je save actie');


    if (this.artist) {

      this.artistService.putItem(this.artistForm.value, this.artistId).subscribe()
      this.router.navigate(['/artist']);

    } else {

      this.artist = this.artistForm.value
      this.artist.userId = this.authService.getCurrentUserId()
      this.artistService.postItem(this.artist).subscribe()
      this.router.navigate(['/artist']);

    }


  }
  public cancel() {
    console.log(this.router.url)
    this.subs.unsubscribe();
    this.router.navigate(['/artist']);
  }
  ngOnDestroy(): void {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }
  onGenre() {
    console.log(this.genres)
  }


}
