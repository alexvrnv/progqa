import {Component, Input, OnInit} from '@angular/core';
import {QuestionService} from "../../services/question.service";
import {Answer} from "../../models/answer";
import {SessionService} from "../../services/session.service";

@Component({
  selector: 'app-answer-form',
  templateUrl: './answer-form.component.html',
  styleUrls: ['./answer-form.component.css']
})
export class AnswerFormComponent implements OnInit {

  newAnswerDescription: string;

  constructor(private questionService: QuestionService) { }

  ngOnInit() {
  }

  @Input() question;

  performAnswer() {
    this.question.answers.push(new Answer(SessionService.currentUser._id, this.question._id, this.newAnswerDescription,
      false, 1231231312));
    this.questionService.answerQuestion(this.question._id, this.newAnswerDescription);
  }

}
