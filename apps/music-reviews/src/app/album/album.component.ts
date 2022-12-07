import { AlbumService } from './../services/album.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Album } from '../models/album.model';
import { catchError, Subscription } from 'rxjs';

@Component({
  selector: 'music-review-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css'],
})
export class AlbumComponent implements OnInit, OnDestroy {
  albums!: Album[];
  subs: Subscription = new Subscription();
  constructor(
    private albumservice: AlbumService
  ) {

  }


  ngOnInit() {


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
