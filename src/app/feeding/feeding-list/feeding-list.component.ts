import { Component, OnInit, Input } from '@angular/core';
import { Feeding } from '../../models/feeding.model';

@Component({
  selector: 'glow-feeding-list',
  templateUrl: './feeding-list.component.html',
  styleUrls: ['./feeding-list.component.scss']
})
export class FeedingListComponent implements OnInit {

  feedings: Feeding[] = [
    new Feeding("1", "2", "01-20-2020 ", "1:20pm", "1:30pm", "7", "2:12"),
    // new Feeding("2", "01-20-2020 ", "5:30pm", "6", "4:35"),
    // new Feeding("3", "01-21-2020 ", "9:45am", "4", "12:57"),
    // new Feeding("4", "01-21-2020 ", "12:00pm", "6", "2:05"),
    // new Feeding("5", "01-21-2020 ", "6:30pm", "5", "7:09"),
    // new Feeding("6", "01-20-2020 ", "1:30pm", "7", "2:01"),
    // new Feeding("7", "01-20-2020 ", "5:30pm", "6", "4:11"),
    // new Feeding("8", "01-21-2020 ", "9:45am", "4", "12:55"),
    // new Feeding("9", "01-21-2020 ", "12:00pm", "6", "2:47"),
    // new Feeding("10", "01-21-2020 ", "6:30pm", "5", "7:02")
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
