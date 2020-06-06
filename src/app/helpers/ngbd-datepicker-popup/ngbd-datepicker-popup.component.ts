import {Component} from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-datepicker-popup',
  templateUrl: './ngbd-datepicker-popup.component.html'
})
export class NgbdDatepickerPopup {
  model: NgbDateStruct;
}