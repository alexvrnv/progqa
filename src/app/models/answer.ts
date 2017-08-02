export class Answer {
  user_id: string;
  question_id: string;
  description: string;
  correct: boolean;
  date_created: number;

  constructor(user_id: string, question_id: string, description: string, correct: boolean, date_created: number) {
    this.user_id = user_id;
    this.question_id = question_id;
    this.description = description;
    this.correct = correct;
    this.date_created = date_created;
  }
}
