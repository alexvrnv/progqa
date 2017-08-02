import {Answer} from "./answer";
import {Technology} from "./technology";
export class User {
  _id: string;
  email: string;
  display_name: string;
  first_name: string;
  last_name: string;
  working_position: string;
  experience: number;
  technologies: Technology[];
  answers: Answer[];


  constructor(id: string, email: string, display_name: string, first_name: string, last_name: string,
              working_position: string, experience: number, technologies: Technology[], answers: Answer[]) {
    this._id = id;
    this.email = email;
    this.display_name = display_name;
    this.first_name = first_name;
    this.last_name = last_name;
    this.working_position = working_position;
    this.experience = experience;
    this.technologies = technologies;
    this.answers = answers;
  }
}
