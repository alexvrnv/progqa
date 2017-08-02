import { Component, OnInit } from '@angular/core';
import {Question} from "../../models/question";
import {QuestionService} from "../../services/question.service";


@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {
  questionList: Question[];

  constructor(private questionService: QuestionService) {
    this.getAllQuestions();
  }

  ngOnInit() {

  }

  getAllQuestions() {
    this.questionService.getAllQuestions().subscribe(questions => this.questionList = questions);
    console.log(this.questionList);
  }


}
