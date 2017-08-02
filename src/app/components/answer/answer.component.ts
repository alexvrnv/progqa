import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() answer;

  getDate(ms: number):string{
    return new Date(ms).toLocaleString();
  }
}
