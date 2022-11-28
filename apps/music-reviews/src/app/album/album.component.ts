import { AlbumService } from './../services/album.service';
import { Component, OnInit } from '@angular/core';
import { Album } from '../models/album.model';

@Component({
  selector: 'music-review-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css'],
})
export class AlbumComponent implements OnInit {
  albums: Album[] = []
  constructor(private albumservice: AlbumService) { }

  ngOnInit() {

    // this.albumservice.getAll().subscribe((albumList) => {
    //   this.albums = albumList
    // })
    this.albums = this.albumservice.getTestList();
  }
}
