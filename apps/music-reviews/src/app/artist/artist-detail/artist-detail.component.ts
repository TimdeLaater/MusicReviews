
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Artist } from '../../models/artist.model';
import { User } from '../../models/user.model';
import { ArtistService } from '../../services/artist.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'music-review-app-artist-detail',
  templateUrl: './artist-detail.component.html',
  styleUrls: ['./artist-detail.component.css'],
})
export class ArtistDetailComponent implements OnInit, OnDestroy {
  artistId: string | null = null;
  artist!: Artist;
  subs: Subscription = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private artistService: ArtistService,
    public authService: AuthService

  ) { }

  ngOnInit(): void {



    this.route.paramMap.subscribe((params) => {
      this.artistId = params.get('id');
      this.subs.add(
        this.artistService
          .getById(this.artistId)
          .pipe(

        )
          .subscribe((item) => {
            console.log(item, "Api return");
            this.artist = item;
          })
      );
    });
  }
  public back() {
    this.router.navigate(['/album'])
  }
  delete() {
    this.artistService.delete(this.artistId).subscribe()
    this.router.navigate(['/artist']);
  }

  ngOnDestroy(): void {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }
}
