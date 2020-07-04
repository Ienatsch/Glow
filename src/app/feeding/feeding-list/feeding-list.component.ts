import { Component, OnInit, Input } from '@angular/core';
import { Feeding } from '../../models/feeding.model';
import { FeedingService } from 'src/app/services/feeding.service';
import { ChildService } from 'src/app/services/child.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'glow-feeding-list',
  templateUrl: './feeding-list.component.html',
  styleUrls: ['./feeding-list.component.scss']
})
export class FeedingListComponent implements OnInit {

  @Input() childId: string;
  feedingList: Feeding[] = [];
  subscription: Subscription;

  constructor(private feedingService: FeedingService, childService: ChildService) {
    this.feedingList = feedingService.feedingList;
   }

  ngOnInit(): void {
    this.subscription = this.feedingService.feedingListChangedEvent.subscribe((feedingList: Feeding[]) => {
      this.feedingList = feedingList;
    })
  }
}
