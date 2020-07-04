import { Component, OnInit, Input } from '@angular/core';
import { Feeding } from '../../models/feeding.model';
import { FeedingService } from 'src/app/services/feeding.service';
import { FeedingListComponent } from '../feeding-list/feeding-list.component';

@Component({
  selector: 'glow-feeding-item',
  templateUrl: './feeding-item.component.html',
  styleUrls: ['./feeding-item.component.scss']
})
export class FeedingItemComponent implements OnInit {
  @Input() feeding: Feeding;
  
  constructor(private feedingService: FeedingService, private feedingList: FeedingListComponent) { }

  ngOnInit(): void {
    
  }

  deleteFeeding(feedingId: string) {
    this.feedingService.delete(feedingId);
  }
}
