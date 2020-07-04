import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, Subscription } from 'rxjs';
import { Constants } from '../../config/constants';
import { Feeding } from '../models/feeding.model';
import { Child } from '../models/child.model';

@Injectable({ providedIn: 'root' })
export class FeedingService implements OnInit {
    child: Observable<Child>;
    childId: string;
    constants: Constants;
    headers: HttpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    feedingList: Feeding[] = [];
    feedingListChangedEvent = new Subject<Feeding[]>();
    subscription: Subscription;

    constructor(private http: HttpClient) {
        this.constants = new Constants();
    }

    ngOnInit() {
        this.subscription = this.feedingListChangedEvent.subscribe((feedingList: Feeding[]) => {
            this.feedingList = feedingList;
        });
    }

    getAllByChild(childId: string) {
        this.childId = childId;
        this.http.get<Feeding[]>(`${this.constants.API_ENDPOINT}/feeding/${childId}`).subscribe((feedingList: Feeding[]) => {
            this.feedingList = feedingList;
            this.feedingListChangedEvent.next(this.feedingList);
        });
        return this.feedingList;
    }

    addFeeding(feeding: Feeding) {
        this.http.post(`${this.constants.API_ENDPOINT}/feeding`,feeding, {headers: this.headers} ).subscribe(() => {
            this.feedingListChangedEvent.next(this.feedingList.slice());
            this.feedingList = this.getAllByChild(this.childId);
        });
    }

    getById(id: string) {
        return this.http.get<Feeding>(`${this.constants.API_ENDPOINT}/feeding/${id}`);
    }

    delete(feedingId: string) {
        let pos = this.feedingList.indexOf(this.feedingList.filter(x => x.feedingId === feedingId)[0]);
        this.feedingList.splice(pos, 1);
        this.http.delete(`${this.constants.API_ENDPOINT}/feeding/${feedingId}`).subscribe(() => {
            this.feedingListChangedEvent.next(this.feedingList.slice());
        })
    }
}