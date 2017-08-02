import { Component, OnInit, Input } from '@angular/core';

import {QuestionService} from "../../services/question.service";
import {Question} from "../../models/question";
import {Router} from "@angular/router";

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.css']
})
export class QuestionFormComponent implements OnInit {
  question: Question;

  constructor(private questionService: QuestionService, private router: Router) { }

  ngOnInit() {

  }

  newQuestionHeader: string = '';
  newQuestionDescription: string = '';

  performQuestion() {
    let r = this.router;
    this.questionService.createQuestion(this.newQuestionHeader, this.newQuestionDescription).subscribe(function()
    {r.navigate(['question-list']);});

  }

}
