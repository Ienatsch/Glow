import { Component, OnInit, Input } from '@angular/core';
import { Feeding } from '../feeding.modal';

@Component({
  selector: 'glow-feeding-list',
  templateUrl: './feeding-list.component.html',
  styleUrls: ['./feeding-list.component.scss']
})
export class FeedingListComponent implements OnInit {

  feedings: Feeding[] = [
    new Feeding("01-20-2020 ", "1:30pm", "7", "2"),
    new Feeding("01-20-2020 ", "5:30pm", "6", "4"),
    new Feeding("01-21-2020 ", "9:45am", "4", "12"),
    new Feeding("01-21-2020 ", "12:00pm", "6", "2"),
    new Feeding("01-21-2020 ", "6:30pm", "5", "7"),
    new Feeding("01-20-2020 ", "1:30pm", "7", "2"),
    new Feeding("01-20-2020 ", "5:30pm", "6", "4"),
    new Feeding("01-21-2020 ", "9:45am", "4", "12"),
    new Feeding("01-21-2020 ", "12:00pm", "6", "2"),
    new Feeding("01-21-2020 ", "6:30pm", "5", "7"),
    new Feeding("01-20-2020 ", "1:30pm", "7", "2"),
    new Feeding("01-20-2020 ", "5:30pm", "6", "4"),
    new Feeding("01-21-2020 ", "9:45am", "4", "12"),
    new Feeding("01-21-2020 ", "12:00pm", "6", "2"),
    new Feeding("01-21-2020 ", "6:30pm", "5", "7"),
    new Feeding("01-20-2020 ", "1:30pm", "7", "2"),
    new Feeding("01-20-2020 ", "5:30pm", "6", "4"),
    new Feeding("01-21-2020 ", "9:45am", "4", "12"),
    new Feeding("01-21-2020 ", "12:00pm", "6", "2"),
    new Feeding("01-21-2020 ", "6:30pm", "5", "7")
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
