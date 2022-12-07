import { Subscription } from 'rxjs';
import { Album } from './../../models/album.model';

import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../../services/album.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'music-review-app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css'],
})
export class AlbumDetailComponent implements OnInit {
  album!: Album;
  subs: Subscription = new Subscription();
  id: string | null = null;
  constructor(private albumService: AlbumService, private route: ActivatedRoute, private router: Router) {

  }


  ngOnInit() {
    this.subs.add(
      this.route.paramMap.subscribe((params) => {
        this.id = params.get('id')
      })
    )

    this.subs.add(
      this.albumService
        .getById(this.id)
        .pipe(

      )
        .subscribe((item) => {
          console.log(item, "Api return");
          this.album = item;
        })
    );


  }
  public delete() {

    this.albumService.delete(this.id)

    this.router.navigate(['/album']);
  }

  ngOnDestroy(): void {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }
}
