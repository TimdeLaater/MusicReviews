import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";
import { User } from "../models/user.model";

@Injectable({
    providedIn: 'root'
})



export class UserService {
    constructor(private http: HttpClient) {

    }


    getAll(): Observable<User[]> {
        return this.http.get<User[]>(`${environment.SERVER_API_URL}/artist/`)

    }
    postItem(item: User): Observable<User> {
        console.log(item, "TestAPICALL");
        return this.http.post<any>(`${environment.SERVER_API_URL}/user/add`, item,)

    }

    putItem(item: User, id: any): Observable<User> {
        console.log(item, id, "TestAPICALL");
        return this.http.put<User>(`${environment.SERVER_API_URL}/user/${id}`, item)
    }

    getById(id: any): Observable<User> {
        return this.http.get<User>(`${environment.SERVER_API_URL}/user/${id}`)
    }

    delete(id: any): Observable<User> {
        return this.http.delete<User>(`${environment.SERVER_API_URL}/user/${id}`)
    }



}