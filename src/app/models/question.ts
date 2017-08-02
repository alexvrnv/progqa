import {Answer} from "./answer";
export class Question {
  _id: string;
  question_header: string;
  description: string;
  user_id: string;
  date_created: number;
  votes: string[];
  views: string[];
  closed: boolean;
  answers: Answer[];


  constructor(id: string, question_header: string, description: string, user_id: string, date_created: number,
              votes: string[], views: string[], closed: boolean, answers: Answer[]) {
    this._id = id;
    this.question_header = question_header;
    this.description = description;
    this.user_id = user_id;
    this.date_created = date_created;
    this.votes = votes;
    this.views = views;
    this.closed = closed;
    this.answers = answers;
  }
}
