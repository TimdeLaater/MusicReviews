import { Artist } from './../models/artist.model';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class ArtistService {
    baseUrl: string | any = 'http://localhost:3000'
    constructor(private http: HttpClient) {
        console.log(this.baseUrl, "API")
    }

    getAll(): Observable<Artist[]> {
        return this.http.get<Artist[]>(`${this.baseUrl}/artist/`)

    }
    postItem(item: Artist): Observable<Artist> {
        console.log(item, "TestAPICALL");
        return this.http.post<any>(`${this.baseUrl}/Artist/add`, item,)

    }

    putItem(item: Artist, id: any): Observable<Artist> {
        console.log(item, id, "TestAPICALL");
        return this.http.put<Artist>(`${this.baseUrl}/Artist/${id}`, item)
    }

    getById(id: any): Observable<Artist> {
        return this.http.get<Artist>(`${this.baseUrl}/Artist/${id}`)
    }

    delete(id: any): Observable<Artist> {
        return this.http.delete<Artist>(`${this.baseUrl}/Artist/${id}`)
    }



}