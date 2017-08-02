import { Injectable } from '@angular/core';
import { Question} from '../models/question'
import {Http, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {UserService} from "./user.service";
import {SessionService} from "./session.service";

@Injectable()
export class QuestionService {
  private apiUrl = 'https://progqaserver.herokuapp.com/';
  questions: Question[] = [];
  question: Question;


  constructor(private http: Http) { }

  getAllQuestions(): Observable<Question[]> {
    return this.http.get(this.apiUrl + 'questions')
      .map(res => res.json())
      .map(questions => this.questions = questions)
      .catch(this.handleError);
  }

  createQuestion(questionHeader: string, questionDescription: string) {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers});
    return this.http.post(this.apiUrl + 'sf/questions', {question: {question_header: questionHeader,
      description: questionDescription, user_id: JSON.parse(localStorage.getItem('currentUser'))._id},
      token: JSON.parse(localStorage.getItem('token'))}, options)
      .catch(this.handleError);

  }

  // deleteQuestion(_id: string) {
  //   this.http.delete(this.apiUrl)
  //     .map(res => res.json().data as Question)
  //     .map(question => this.questions.push(question))
  //     .catch(this.handleError)
  //     .subscribe();
  // }
  //
  updateQuestion(_id: string, questionHeader: string, questionDescription: string) {
    return this.http.put(this.apiUrl + 'sf/questions/' + _id, {question_header: questionHeader,
      description: questionDescription, token: JSON.parse(localStorage.getItem('token'))}, null)
      .catch(this.handleError)
  }


  answerQuestion(_id: string, description: string) {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers});
    return this.http.post(this.apiUrl + 'sf/answers', {question_id: _id, description: description,
        user_id: JSON.parse(localStorage.getItem('currentUser'))._id,
      token: JSON.parse(localStorage.getItem('token'))}, options)
      .catch(this.handleError)
      .subscribe();
  }

  getQuestionById(_id: string) {
    return this.http.get(this.apiUrl + 'questions/' + _id)
      .map(res => res.json())
      .map(question => this.question = question)
      .catch(this.handleError);
  }


  vote(_id: string) {
    return this.http.put(this.apiUrl + 'sf/questionVote/' + _id, {user_id: SessionService.currentUser._id,
      token: JSON.parse(localStorage.getItem('token'))}, null)
      .subscribe();
  }

  private handleError(error: any) {
    console.error('Error', error);
    return Observable.throw(error.message || error);
  }

}
