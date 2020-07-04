import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Constants } from '../../config/constants';
import { Child } from '../models/child.model';
import { AccountService } from './account.service';

@Injectable({ providedIn: 'root' })
export class ChildService {
    public child: Observable<Child>;
    public constants: Constants;
    public activeChild: 1;

    constructor(private http: HttpClient, private accountService: AccountService) {
        this.constants = new Constants();        
    }

    getAllByUser() {
        var userId = this.accountService.userValue.userId;
        return this.http.get<Child[]>(`${this.constants.API_ENDPOINT}/child/${userId}`).toPromise();
    }

    addChild(child: Child) {
        this.http.post(`${this.constants.API_ENDPOINT}/child/AddChild`, child ).subscribe(
            res => console.log(res),
            err => console.log("Error adding child"),
            () => console.log("Successfully added child")
        );
        
    }

    getById(childId: string) {
        return this.http.get<Child>(`${this.constants.API_ENDPOINT}/child/${childId}`);
    }

    editChild(child: Child) {

    }

    deleteChild(childId: string) {
        return this.http.delete(`${this.constants.API_ENDPOINT}/child/${childId}`).subscribe(
            res => console.log(res),
            err => console.log("Error deleting child"),
            () => console.log("Successfully deleted child")
        );
    }
}