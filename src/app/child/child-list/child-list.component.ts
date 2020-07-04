import { Component, OnInit } from '@angular/core';
import { ChildService } from 'src/app/services/child.service';
import { Child } from 'src/app/models/child.model';

@Component({
  selector: 'glow-child-list',
  templateUrl: './child-list.component.html',
  styleUrls: ['./child-list.component.scss']
})
export class ChildListComponent implements OnInit {
  children: Child[];
  
  constructor(private childService: ChildService) {
  }

  ngOnInit(): void {
    // this.childService.getAllByUser().subscribe((children: Child[]) => this.children = children);
  }

}
