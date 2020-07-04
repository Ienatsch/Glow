import { Component, OnInit, Input } from '@angular/core';
import { SleepService } from 'src/app/services/sleep.service';
import { ChildService } from 'src/app/services/child.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Sleep } from 'src/app/models/sleep.model';

@Component({
  selector: 'glow-add-sleep-modal',
  templateUrl: './add-sleep-modal.component.html',
  styleUrls: ['./add-sleep-modal.component.scss']
})
export class AddSleepModalComponent {

  @Input() childId: string;
  timeStart = {hour: 13, minute: 30};
  timeEnd = {hour: 13, minute: 30};
  ozFed: string;
  meridian = true;
  closeResult: string;
  inputDisabled = false;

  constructor(private modalService: NgbModal, private sleepService: SleepService, private childService: ChildService) {
   }

  openModal(content) {
    this.modalService.open(content, {size: 'lg', centered: true, ariaLabelledBy: 'add-sleep-modal'}).result.then((result) => {
      if (result == "saved") {
        var sleep: Sleep = {
          childId: this.childId,
          sleepId: null,
          sleepDate: null,
          sleepStartTime: `${this.timeStart.hour}:${this.timeStart.minute}`,
          sleepEndTime: `${this.timeEnd.hour}:${this.timeEnd.minute}`,
          timeSinceLastSleep: null,
          
        }
        this.savesleepModal(sleep);
      }
    }, (reason) => {
      this.closeResult = `Dismissed`;
    });
  }

  savesleepModal(sleep: Sleep) {
    this.sleepService.addsleep(sleep);
  }
}
