import { ArtistService } from './../../services/artist.service';
import { Artist } from './../../models/artist.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Album } from '../../models/album.model';
import { Genre } from '../../models/genre.enum';
import { AuthService } from '../../services/auth.service';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { AlbumService } from '../../services/album.service';

@Component({
  selector: 'music-review-app-album-edit',
  templateUrl: './album-edit.component.html',
  styleUrls: ['./album-edit.component.css'],
})
export class AlbumEditComponent implements OnInit, OnDestroy {
  albumId: string | null = null;
  album!: Album;
  modalReference: any;
  keys = Object.values;
  albumForm!: FormGroup
  genres = Genre;
  artistList!: Artist[];
  subs: Subscription = new Subscription();
  constructor(

    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService,
    private authService: AuthService,
    private artistService: ArtistService,
    config: NgbModalConfig, private modalService: NgbModal

  ) {
    config.backdrop = 'static';
    config.keyboard = false;
  }


  ngOnInit(): void {
    this.albumForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      genre: new FormControl(null, Validators.required),
      releaseDate: new FormControl(null, Validators.required),
      coverImg: new FormControl(null, Validators.required),
      language: new FormControl(null, Validators.required),
      artistId: new FormControl(null, Validators.required),


    });

    console.log(this.genres)
    this.route.paramMap.subscribe((params) => {
      this.albumId = params.get('id');
      if (this.albumId) {
        // Bestaande artiest
        this.subs.add(
          this.albumService
            .getById(this.albumId)
            .pipe(

          )
            .subscribe((item) => {
              // console.log(item, "Api return");
              this.album = item;
            })

        );
      }
      this.subs.add(
        this.artistService
          .getAll()
          .pipe(

        )
          .subscribe((items: Artist[]) => {
            console.log(items, "Api return");
            this.artistList = items;

          })
      );
      this.albumForm.setValue({
        name: this.album.name,
        description: this.album.description,
        genre: this.album.genre,
        releaseDate: this.album.releaseDate,
        coverImg: this.album.coverImg,
        language: this.album.language,
        artistId: this.album.artistId,

      })
    });


  }



  onSubmit() {
    console.log('Hier komt je save actie');





  }
  public back() {
    this.modalReference.close();

    this.router.navigate(['/album']);
  }
  public toArtist() {
    this.router.navigate(['/artist/add']);

  }
  open(content: any) {
    this.modalReference = this.modalService.open(content);
    if (this.album) {
      console.log(this.album)
      this.albumService.putItem(this.albumForm.value, this.albumId).subscribe()


    } else {

      this.album = this.albumForm.value
      this.album.userId = this.authService.getCurrentUserId()
      this.albumService.postItem(this.album).subscribe()


    }
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