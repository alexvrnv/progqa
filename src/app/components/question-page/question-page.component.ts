import { Component, OnInit } from '@angular/core';
import {QuestionService} from "../../services/question.service";
import {Question} from "../../models/question";
import {Router, ActivatedRoute, Params} from '@angular/router';
import {SessionService} from "../../services/session.service";
import {Answer} from "../../models/answer";
import {User} from "../../models/user";


@Component({
  selector: 'app-question-page',
  templateUrl: './question-page.component.html',
  styleUrls: ['./question-page.component.css']

})

export class QuestionPageComponent implements OnInit {

  question: Question;
  curUser: User;
  editStatus: boolean = false;
  tempHeader: string;
  tempDescription: string;

  constructor(private questionService: QuestionService, private activatedRoute: ActivatedRoute) {
    console.log(SessionService.currentUser);
    this.activatedRoute.params.subscribe(params => {
      this.getQuestion(params['id']);
      this.curUser = SessionService.currentUser;
    });

  }

  ngOnInit() {

  }

  getQuestion(id: string) {
    this.questionService.getQuestionById(id).subscribe(question => this.question = question);
  }

  getDate(ms: number):string{
    return new Date(ms).toLocaleString();
}

  vote(id: string) {
    this.question.votes.push(this.curUser._id);
    this.questionService.vote(id);
  }

  edit(status:boolean) {
    this.editStatus = status;
    if (this.editStatus) {
      this.tempHeader = this.question.question_header;
      this.tempDescription = this.question.description;
    }
  }

  voted():boolean {
    for (let i = 0; i < this.question.votes.length; i++) {
      if (this.question.votes[i] == this.curUser._id)
        return true;
    }
    return false;
  }

  answered():boolean {
    for (let i = 0; i < this.question.answers.length; i++) {
      if (this.question.answers[i].user_id == this.curUser._id)
        return true;
    }
    return false;
  }

  performQuestion() {
    this.question.question_header = this.tempHeader;
    this.question.description = this.tempDescription;
    console.log(this.tempHeader, this.tempDescription);
    this.questionService.updateQuestion(this.question._id, this.tempHeader, this.tempDescription)
      .subscribe();
  }
}
