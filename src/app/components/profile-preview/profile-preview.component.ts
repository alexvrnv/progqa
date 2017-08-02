import {Component, Input, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {User} from "../../models/user";

@Component({
  selector: 'app-profile-preview',
  templateUrl: './profile-preview.component.html',
  styleUrls: ['./profile-preview.component.css']
})
export class ProfilePreviewComponent implements OnInit {

  user: User = new User(null, null, null, null, null, null, null, [], []);

  constructor(private userService: UserService) {

  }

  ngOnInit() {
    this.getUser(this.user_id);
  }

  @Input() user_id;

  getUser(id: string) {
    this.userService.getUserById(id).subscribe(o => this.user = o);
  }
}
