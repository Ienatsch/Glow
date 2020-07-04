import { Component, OnInit, Input } from '@angular/core';
import { SleepService } from 'src/app/services/sleep.service';
import { Sleep } from 'src/app/models/sleep.model';
import { SleepListComponent } from '../sleep-list/sleep-list.component';

@Component({
  selector: 'glow-sleep-item',
  templateUrl: './sleep-item.component.html',
  styleUrls: ['./sleep-item.component.scss']
})
export class SleepItemComponent implements OnInit {
  @Input() sleep: Sleep;
  
  constructor(private sleepService: SleepService, private sleepList: SleepListComponent) { }

  ngOnInit(): void {
    
  }

  deleteSleep(sleepId: string) {
    this.sleepService.delete(sleepId);
  }
}
