import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Constants } from '../../config/constants';
import { Feeding } from '../models/feeding.model';
import { Child } from '../models/child.model';

@Injectable({ providedIn: 'root' })
export class FeedingService {
    public child: Observable<Child>;
    public constants: Constants;

    constructor(
        private router: Router,
        private http: HttpClient
    ) {
        this.constants = new Constants();        
    }

    getAllByChild(childId: string) {
        return this.http.get<Feeding[]>(`${this.constants.API_ENDPOINT}/feeding/${childId}`);
    }

    addFeeding(feeding: Feeding) {
        return this.http.post(`${this.constants.API_ENDPOINT}/feeding/AddFeeding`, feeding );
    }

    getById(id: string) {
        return this.http.get<Feeding>(`${this.constants.API_ENDPOINT}/feeding/${id}`);
    }

    // delete(id: string) {
    //     return this.http.delete(`${this.constants.API_ENDPOINT}/feeding/${id}`)
    //         .pipe(map(x => {
    //             // auto logout if the logged in user deleted their own record
    //             if (id == this.userId.userId) {
    //                 this.logout();
    //             }
    //             return x;
    //         }));
    // }
}