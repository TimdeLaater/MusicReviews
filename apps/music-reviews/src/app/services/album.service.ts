import { Genre } from './../models/genre.enum';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Album } from "../models/album.model";

@Injectable({
    providedIn: 'root'
})



export class AlbumService {
    albums: Album[] = [
        {
            id: 1,
            name: "The Car",
            discription: "The latest arctic monkey album takes a dive into more of a jazz vibe",
            genre: Genre.indie,
            language: "English",
            rating: 8.9,
            // public releaseDate: string,
            // public artist: Artist,
            coverImg: "https://media.pitchfork.com/photos/63061cdbc3194266963384da/3:2/w_3000,h_2000,c_limit/Arctic-Monkeys-The-Car.jpg"
        },

    ]




    baseUrl: string = "https://musicreviews-production.up.railway.app/data-api"
    constructor(private http: HttpClient) {

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

    getById(id?: number): Observable<Album> {
        return this.http.get<Album>(`${this.baseUrl}/album/${id}`)
    }

    removebyId(id: number): Observable<Album> {
        return this.http.delete<Album>(`${this.baseUrl}/album/${id}`)
    }

    getAll(): Observable<Album[]> {
        return this.http.get<Album[]>(`${this.baseUrl}/album`)
    }

    getFromUser(id: any): Observable<Album[]> {
        return this.http.get<Album[]>(`${this.baseUrl}/album/user/${id}`)
    }
}