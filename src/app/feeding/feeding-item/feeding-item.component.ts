import { Component, OnInit, Input } from '@angular/core';
import { Feeding } from '../feeding.modal';

@Component({
  selector: 'glow-feeding-item',
  templateUrl: './feeding-item.component.html',
  styleUrls: ['./feeding-item.component.scss']
})
export class FeedingItemComponent implements OnInit {
  @Input() feeding: Feeding;

  constructor() { }

  ngOnInit(): void {
  }

}
