import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, Subscription } from 'rxjs';
import { Constants } from '../../config/constants';
import { Child } from '../models/child.model';
import { Sleep } from '../models/sleep.model';

@Injectable({ providedIn: 'root' })
export class SleepService implements OnInit {
    child: Observable<Child>;
    childId: string;
    constants: Constants;
    headers: HttpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    sleepList: Sleep[] = [];
    sleepListChangedEvent = new Subject<Sleep[]>();
    subscription: Subscription;

    constructor(private http: HttpClient) {
        this.constants = new Constants();
    }

    ngOnInit() {
        this.subscription = this.sleepListChangedEvent.subscribe((sleepList: Sleep[]) => {
            this.sleepList = sleepList;
        });
    }

    getAllByChild(childId: string) {
        this.childId = childId;
        this.http.get<Sleep[]>(`${this.constants.API_ENDPOINT}/sleep/${childId}`).subscribe((sleepList: Sleep[]) => {
            this.sleepList = sleepList;
            this.sleepListChangedEvent.next(this.sleepList);
        });
        return this.sleepList;
    }

    addsleep(sleep: Sleep) {
        this.http.post(`${this.constants.API_ENDPOINT}/sleep`,sleep, {headers: this.headers} ).subscribe(() => {
            this.sleepListChangedEvent.next(this.sleepList.slice());
            this.sleepList = this.getAllByChild(this.childId);
        });
    }

    getById(id: string) {
        return this.http.get<Sleep>(`${this.constants.API_ENDPOINT}/sleep/${id}`);
    }

    delete(sleepId: string) {
        let pos = this.sleepList.indexOf(this.sleepList.filter(x => x.sleepId === sleepId)[0]);
        this.sleepList.splice(pos, 1);
        this.http.delete(`${this.constants.API_ENDPOINT}/sleep/${sleepId}`).subscribe(() => {
            this.sleepListChangedEvent.next(this.sleepList.slice());
        })
    }

}