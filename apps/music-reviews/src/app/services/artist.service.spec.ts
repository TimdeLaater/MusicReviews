import { ArtistService } from './../../../../music-review-api/src/app/artist/artist.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Artist } from './../models/artist.model';
import { HttpClient } from "@angular/common/http";
import { HttpClientTestingModule } from '@angular/common/http/testing';
describe('AuthService', () => {
    let component: ArtistService;
    let fixture: ComponentFixture<ArtistService>;
    const artists = [{
        _id: "638a4b812bdfa27b13c5869f",
        name: "Arctic Monkeys",
        description: "A british band from Shefield England",
        birthday: "2022-01-08",
        genre: "Rock",
        coverImg: "https://m.media-amazon.com/images/I/9108EhcTlTL._AC_SL1500_.jpg",
        userId: "6384e066e52981ed8a580428",
    }];

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ArtistService],
            imports: [
                HttpClientTestingModule
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(ArtistService);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });




});




