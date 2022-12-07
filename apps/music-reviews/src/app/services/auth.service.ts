import { AuthUser, LoginUser, User } from '../models/user.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { map, catchError, switchMap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    public currentUser$ = new BehaviorSubject<User | undefined>(undefined);
    private readonly CURRENT_USER = 'currentuser';
    private token = "";
    private readonly headers = new HttpHeaders({
        'Content-Type': 'application/json',
    });

    constructor(
        private http: HttpClient,
        private router: Router

    ) {

        // Check of we al een ingelogde user hebben
        // Zo ja, check dan op de backend of het token nog valid is.
        // Het token kan namelijk verlopen zijn. Indien verlopen
        // retourneren we meteen een nieuw token.
        this.getUserFromLocalStorage()
            .pipe(
                // switchMap is overbodig als we validateToken() niet gebruiken...
                switchMap((user: User | undefined) => {
                    if (user) {
                        console.log('User found in local storage');
                        this.currentUser$.next(user);
                        // return this.validateToken(user);
                        return of(user);
                    } else {
                        console.log(`No current user found`);
                        return of(undefined);
                    }
                })
            )
            .subscribe(() => console.log('Startup auth done'));
    }
    getUserFromLocalStorage(): Observable<User | undefined> {
        const userData = localStorage.getItem(this.CURRENT_USER);
        if (userData) {
            const localUser = JSON.parse(userData);
            return of(localUser);
        } else {
            return of(undefined);
        }
    }
    login(formData: LoginUser): Observable<User | undefined> {
        return this.http.post<LoginUser>(
            `${environment.SERVER_API_URL}/user/login`, formData, {
            headers: this.headers
        }
        )
            .pipe(

                map((authUser: AuthUser | any) => {
                    console.log(authUser)
                    authUser.user.token = authUser.token
                    this.saveUserToLocalStorage(authUser.user);
                    this.currentUser$.next(authUser.user);
                    return authUser.user;
                }),
                catchError((error) => {
                    console.log('error:', error);
                    console.log('error.message:', error.message);
                    console.log('error.error.message:', error.error.message);
                    return of(undefined);
                })
            );
    }


    register(userData: User): Observable<User | undefined> {
        console.log(userData);
        return this.http
            .post<User>(
                `${environment.SERVER_API_URL}/user/register`, userData, {
                headers: this.headers
            }
            )
            .pipe(
                map((authUser: AuthUser | any) => {
                    console.log(authUser)
                    authUser.user.token = authUser.token
                    this.saveUserToLocalStorage(authUser.user);
                    this.currentUser$.next(authUser.user);
                    return authUser.user;
                }),
                catchError((error) => {
                    console.log('error:', error);
                    console.log('error.message:', error.message);
                    console.log('error.error.message:', error.error.message);
                    return of(undefined);
                })
            );
    }
    logout(): void {
        this.router
            .navigate(['/'])
            .then((success) => {
                // true when canDeactivate allows us to leave the page.
                if (success) {
                    console.log('logout - removing local user info');
                    localStorage.removeItem(this.CURRENT_USER);
                    this.currentUser$.next(undefined);
                } else {
                    console.log('navigate result:', success);
                }
            })
            .catch((error) => console.log('not logged out!'));
    }


    private saveUserToLocalStorage(user: User): void {
        localStorage.setItem(this.CURRENT_USER, JSON.stringify(user));
    }

    userMayEdit(itemUserId: any): Observable<boolean> {
        console.log('userMayEdit');
        return this.currentUser$.pipe(
            map((user: User | undefined) =>
                user ? user._id === itemUserId : false
            )
        );
    }

    getAuthorizationToken(): string | undefined {
        const userData = localStorage.getItem(this.CURRENT_USER);
        if (userData) {
            const user: User = JSON.parse(userData);


            const tokenObject = user.token
            return tokenObject?.token
        }
        return undefined;
    }
    getCurrentUserId(): string | undefined {
        const userData = localStorage.getItem(this.CURRENT_USER);
        if (userData) {
            const user: User = JSON.parse(userData);


            return user._id
        }
        return undefined;
    }

}
const url = `${environment.SERVER_API_URL}/login`;