import { Artist } from './../models/artist.model';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})

export class ArtistService {
    baseUrl: string | any = 'http://localhost:3000'
    constructor(private http: HttpClient) {
        console.log(this.baseUrl, "API")
    }

    getAll(): Observable<Artist[]> {
        return this.http.get<Artist[]>(`${environment.SERVER_API_URL}/artist/`)

    }
    postItem(item: Artist): Observable<Artist> {
        console.log(item, "TestAPICALL");
        return this.http.post<any>(`${environment.SERVER_API_URL}/Artist/add`, item,)

    }

    putItem(item: Artist, id: any): Observable<Artist> {
        console.log(item, id, "TestAPICALL");
        return this.http.put<Artist>(`${environment.SERVER_API_URL}/Artist/${id}`, item)
    }

    getById(id: any): Observable<Artist> {
        return this.http.get<Artist>(`${environment.SERVER_API_URL}/Artist/${id}`)
    }

    delete(id: any): Observable<Artist> {
        return this.http.delete<Artist>(`${environment.SERVER_API_URL}/Artist/${id}`)
    }



}