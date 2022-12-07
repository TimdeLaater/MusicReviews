import { environment } from './../../../../music-review-api/src/environments/environment';
import { Genre } from './../models/genre.enum';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map, Observable } from "rxjs";
import { Album } from "../models/album.model";

@Injectable({
    providedIn: 'root'
})



export class AlbumService {
    albums: Album[] = [
        {
            _id: "1",
            name: "The Car",
            description: "The latest arctic monkey album takes a dive into more of a jazz vibe",
            genre: "Indie",
            language: "English",
            rating: 8.9,
            userId: "12",
            releaseDate: "20-10-2022",
            artistId: "aaaaaaa",
            coverImg: "https://media.pitchfork.com/photos/63061cdbc3194266963384da/3:2/w_3000,h_2000,c_limit/Arctic-Monkeys-The-Car.jpg"
        },

    ]






    baseUrl: string | any = 'http://localhost:3333'
    constructor(private http: HttpClient) {
        console.log(this.baseUrl, "API")


    }
    getTestList(): Album[] {
        return this.albums;
    }

    postItem(item: Album): Observable<Album> {
        return this.http.post<any>(`${this.baseUrl}/album/create`, item)
    }

    putItem(item: Album, id: any): Observable<Album> {
        return this.http.put<any>(`${this.baseUrl}/album/${id}`, item)
    }

    getById(id: any): Observable<Album> {
        return this.http.get<Album>(`${this.baseUrl}/album/${id}`)
    }

    delete(id: any): Observable<Album> {
        return this.http.delete<Album>(`${this.baseUrl}/album/${id}`)
    }
    getAll(): Observable<Album[]> {
        return this.http.get<Album[]>(`${this.baseUrl}/album/`)

    }

    getFromUser(id: any): Observable<Album[]> {
        return this.http.get<Album[]>(`${this.baseUrl}/album/user/${id}`)
    }
}