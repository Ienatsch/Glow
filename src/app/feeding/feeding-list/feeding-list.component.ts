import { Component, OnInit } from '@angular/core';
import { Feeding } from '../../models/feeding.model';

@Component({
  selector: 'glow-feeding-list',
  templateUrl: './feeding-list.component.html',
  styleUrls: ['./feeding-list.component.scss']
})
export class FeedingListComponent implements OnInit {

  feedings: Feeding[] = [
    
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
