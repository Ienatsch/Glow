import { Component, OnInit } from '@angular/core';
import { Sleep } from '../models/sleep.model';
import { ApiHttpService } from '../services/api-http.service';
import { ApiEndpointsService } from '../services/api-endpoints.service';
import { ChildService } from '../services/child.service';
import { SleepService } from '../services/sleep.service';
import { Child } from '../models/child.model';

@Component({
  selector: 'glow-sleep',
  templateUrl: './sleep.component.html',
  styleUrls: ['./sleep.component.scss']
})
export class SleepComponent implements OnInit {
  childId: string;
  sleepList: Sleep[];

  constructor(
    private apiHttpService: ApiHttpService, private apiEndpointsService: ApiEndpointsService, childService: ChildService, sleepService: SleepService) {
      childService.getAllByUser().then((children: Child[]) => {
        this.childId = children[0].childId;
        this.sleepList = sleepService.getAllByChild(this.childId);
      })
     }

  ngOnInit() {

  }
}
