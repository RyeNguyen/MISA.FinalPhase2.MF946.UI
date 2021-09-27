import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../data-transfer/user.service";
import {User} from "../../models/user";

@Component({
  selector: 'app-tms-user-list',
  templateUrl: './tms-user-list.component.html',
  styleUrls: ['./tms-user-list.component.scss']
})
export class TmsUserListComponent implements OnInit {
  userList: User[] = [];

  constructor(private _userService: UserService) {
    this.userList = _userService.getUsers();
  }

  ngOnInit(): void {
  }

}
