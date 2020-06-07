import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/user.model';
import { Constants } from '../../config/constants';

@Injectable({ providedIn: 'root' })
export class AccountService {
    private userSubject: BehaviorSubject<User>;
    public user: Observable<User>;
    public constants: Constants;

    constructor(private router: Router, private http: HttpClient) {
        this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
        this.user = this.userSubject.asObservable();
        this.constants = new Constants();        
    }

    public get userValue(): User {
        return this.userSubject.value;
    }

    login(username, password) {
        var loginInfo = {
            username: username,
            password: password
        }      
        return this.http.post<User>(`${this.constants.API_ENDPOINT}/user/LoginUser`, null, { params: loginInfo })
            .pipe(map(user => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('user', JSON.stringify(user));
                this.userSubject.next(user);
                return user;
            }));
    }

    logout() {
        // remove user from local storage and set current user to null
        localStorage.removeItem('user');
        this.userSubject.next(null);
        this.router.navigate(['/account/login']);
    }

    register(user: User) {
        return this.http.post(`${this.constants.API_ENDPOINT}/user/Register`, user);
    }

    getAll() {
        return this.http.get<User[]>(`${this.constants.API_ENDPOINT}/user`);
    }

    getById(id: string) {
        return this.http.get<User>(`${this.constants.API_ENDPOINT}/user/${id}`);
    }

    update(id, params) {
        return this.http.put(`${this.constants.API_ENDPOINT}/user/${id}`, params)
            .pipe(map(x => {
                // update stored user if the logged in user updated their own record
                if (id == this.userValue.userId) {
                    // update local storage
                    const user = { ...this.userValue, ...params };
                    localStorage.setItem('user', JSON.stringify(user));

                    // publish updated user to subscribers
                    this.userSubject.next(user);
                }
                return x;
            }));
    }

    delete(id: string) {
        return this.http.delete(`${this.constants.API_ENDPOINT}/users/${id}`)
            .pipe(map(x => {
                // auto logout if the logged in user deleted their own record
                if (id == this.userValue.userId) {
                    this.logout();
                }
                return x;
            }));
    }
}