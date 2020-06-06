import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Constants } from '../../config/constants';
import { Child } from '../models/child.model';
import { AccountService } from './account.service';

@Injectable({ providedIn: 'root' })
export class ChildService {
    public child: Observable<Child>;
    public constants: Constants;

    constructor(
        private router: Router,
        private http: HttpClient,
        private accountService: AccountService
    ) {
        this.constants = new Constants();        
    }

    getAllByUser() {
        var userId = this.accountService.userValue.userId;
        return this.http.get<Child[]>(`${this.constants.API_ENDPOINT}/child/${userId}`);
    }

    addChild(child: Child) {
        return this.http.post(`${this.constants.API_ENDPOINT}/Child/AddChild`, child );
    }

    getById(childId: string) {
        return this.http.get<Child>(`${this.constants.API_ENDPOINT}/child/${childId}`);
    }

    // delete(id: string) {
    //     return this.http.delete(`${this.constants.API_ENDPOINT}/child/${id}`)
    //         .pipe(map(x => {
    //             // auto logout if the logged in user deleted their own record
    //             if (id == this.userId.userId) {
    //                 this.logout();
    //             }
    //             return x;
    //         }));
    // }
}