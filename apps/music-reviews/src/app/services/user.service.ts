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

    getById(id: any): Observable<User> {
        console.log(id, "UserService")
        return this.http.get<User>(`${environment.SERVER_API_URL}/user/${id}`)
    }

}