import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../models/user";

@Component({
  selector: 'app-tms-user-list',
  templateUrl: './tms-user-list.component.html',
  styleUrls: ['./tms-user-list.component.scss']
})
export class TmsUserListComponent implements OnInit {
  @Input() userList: User[] = [];

  constructor() {
  }

  ngOnInit(): void {}
}
