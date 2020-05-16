import { Component, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'glow-add-feeding-modal',
  templateUrl: './add-feeding-modal.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./add-feeding-modal.component.scss']
})
export class AddFeedingModalComponent {
  timeStart = {hour: 13, minute: 30};
  timeEnd = {hour: 13, minute: 30};
  meridian = true;
  closeResult: string;

  constructor(private modalService: NgbModal) { }

  openModal(content) {
    this.modalService.open(content, {size: 'lg', centered: true, ariaLabelledBy: 'add-feeding-modal'}).result.then((result) => {
      if (result == "saved") {
        this.saveFeedingModal();
      }
    }, (reason) => {
      this.closeResult = `Dismissed`;
    });
  }

  saveFeedingModal() {
    
  }

}
