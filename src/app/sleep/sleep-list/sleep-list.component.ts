import { Component, OnInit, Input } from '@angular/core';
import { Sleep } from 'src/app/models/sleep.model';
import { Subscription } from 'rxjs';
import { ChildService } from 'src/app/services/child.service';
import { SleepService } from 'src/app/services/sleep.service';

@Component({
  selector: 'glow-sleep-list',
  templateUrl: './sleep-list.component.html',
  styleUrls: ['./sleep-list.component.scss']
})
export class SleepListComponent implements OnInit {
  @Input() childId: string;
  sleepList: Sleep[] = [];
  subscription: Subscription;

  constructor(private sleepService: SleepService, childService: ChildService) {
    this.sleepList = sleepService.sleepList;
   }

  ngOnInit(): void {
    this.subscription = this.sleepService.sleepListChangedEvent.subscribe((sleepList: Sleep[]) => {
      this.sleepList = sleepList;
    })
  }
}
