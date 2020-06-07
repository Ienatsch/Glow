import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Constants } from '../../config/constants';
import { Feeding } from '../models/feeding.model';
import { Child } from '../models/child.model';

@Injectable({ providedIn: 'root' })
export class FeedingService {
    public child: Observable<Child>;
    public constants: Constants;

    constructor(private http: HttpClient) {
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

    delete(feedingId: string) {
        return this.http.delete(`${this.constants.API_ENDPOINT}/feeding/${feedingId}`).subscribe(
            res => console.log(res),
            err => console.log("Error deleting feeding"),
            () => console.log("Successfully deleted feeding")
        )
    }
}