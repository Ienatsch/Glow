import { Component, OnInit, Input } from '@angular/core';
import { Child } from 'src/app/models/child.model';
import { ChildService } from 'src/app/services/child.service';

@Component({
  selector: 'glow-child-item',
  templateUrl: './child-item.component.html',
  styleUrls: ['./child-item.component.scss']
})
export class ChildItemComponent implements OnInit {
  @Input() child: Child;

  constructor(private childService: ChildService) { }

  ngOnInit(): void {
  }

  editChild(child: Child) {
    this.childService.editChild(child);
  }

  deleteChild(childId: string) {
    this.childService.deleteChild(childId);
  }
}
