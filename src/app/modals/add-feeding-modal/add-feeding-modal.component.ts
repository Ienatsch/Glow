import { Component, ViewEncapsulation, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FeedingService } from 'src/app/services/feeding.service';
import { Feeding } from 'src/app/models/feeding.model';
import { ChildService } from 'src/app/services/child.service';
import { AccountService } from 'src/app/services/account.service';
import { Child } from 'src/app/models/child.model';

@Component({
  selector: 'glow-add-feeding-modal',
  templateUrl: './add-feeding-modal.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./add-feeding-modal.component.scss']
})
export class AddFeedingModalComponent {
  @Input() childId: string;
  timeStart = {hour: 13, minute: 30};
  timeEnd = {hour: 13, minute: 30};
  ozFed: string;
  meridian = true;
  closeResult: string;

  constructor(private modalService: NgbModal, private feedingService: FeedingService, private childService: ChildService) {
   }

  openModal(content) {
    this.modalService.open(content, {size: 'lg', centered: true, ariaLabelledBy: 'add-feeding-modal'}).result.then((result) => {
      if (result == "saved") {
        var feeding: Feeding = {
          childId: this.childId,
          feedingId: null,
          feedingDate: null,
          feedingStartTime: `${this.timeStart.hour}:${this.timeStart.minute}`,
          feedingEndTime: `${this.timeEnd.hour}:${this.timeEnd.minute}`,
          oz: parseInt(this.ozFed),
          timeSinceLastFeed: null,
          
        }
        this.saveFeedingModal(feeding);
      }
    }, (reason) => {
      this.closeResult = `Dismissed`;
    });
  }

  saveFeedingModal(feeding: Feeding) {
    this.feedingService.addFeeding(feeding);
  }

}
