import { Component, OnInit, Input } from '@angular/core';
import { Child } from 'src/app/models/child.model';

@Component({
  selector: 'glow-child-item',
  templateUrl: './child-item.component.html',
  styleUrls: ['./child-item.component.scss']
})
export class ChildItemComponent implements OnInit {
  @Input() child: Child;

  constructor() { }

  ngOnInit(): void {
  }

}
