import { Component, OnInit } from '@angular/core';
import { ApiEndpointsService } from '../services/api-endpoints.service';
import { ApiHttpService } from '../services/api-http.service';
import { ChildService } from '../services/child.service';
import { Child } from '../models/child.model';
import { FeedingService } from '../services/feeding.service';
import { Feeding } from '../models/feeding.model';

@Component({
  selector: 'glow-feeding',
  templateUrl: './feeding.component.html',
  styleUrls: ['./feeding.component.scss']
})
export class FeedingComponent implements OnInit  {
  childId: string;
  feedings: Feeding[];

  constructor(
    private apiHttpService: ApiHttpService, private apiEndpointsService: ApiEndpointsService, childService: ChildService, feedingService: FeedingService) {
      childService.getAllByUser().then((children: Child[]) => {
        this.childId = children[0].childId;
        this.feedings = feedingService.getAllByChild(this.childId);
      })
     }

  ngOnInit() {

  }

}
