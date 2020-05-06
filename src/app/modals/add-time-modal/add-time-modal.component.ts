import { Component, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'glow-add-time-modal',
  templateUrl: './add-time-modal.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./add-time-modal.component.scss']
})
export class AddTimeModalComponent {
  time = {hour: 13, minute: 30};
  meridian = true;
  closeResult: string;

  constructor(private modalService: NgbModal) { }

  openModal(content) {
    this.modalService.open(content, {size: 'sm', centered: true, ariaLabelledBy: 'add-time-modal'}).result.then((result) => {
      if (result == "saved") {
        this.saveTimeModal();
      }
    }, (reason) => {
      this.closeResult = `Dismissed`;
    });
  }

  saveTimeModal() {
    console.log(`Time Saved @ ${this.time.hour}:${this.time.minute}`);
  }

}
