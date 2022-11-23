import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Album } from "../models/album.model";

@Injectable({
    providedIn: 'root'
})

export class AlbumService {
    baseUrl: string = 'http://localhost:3333/'
    constructor(private http: HttpClient) {

    }

    postItem(item: Album): Observable<Album> {
        return this.http.post<any>(`${this.baseUrl}/album/`, item)
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