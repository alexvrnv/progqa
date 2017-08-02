import { Component, OnInit, Input } from '@angular/core';
import {Question} from "../../models/question";

@Component({
  selector: 'app-question-list-element',
  templateUrl: './question-list-element.component.html',
  styleUrls: ['./question-list-element.component.css']
})
export class QuestionListElementComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() question;

  getDate(ms: number):string{
    return new Date(ms).toLocaleString();
  }
}
