import { Component, OnInit } from '@angular/core';
import {UserService} from "../../data-transfer/user.service";
import {User} from "../../shared/models/user";
import {MemberColumn, MemberColumns} from "../../shared/models/member-columns";
import {MODAL_MEMBER_CONSTANTS} from "../../shared/constants/modal-member";

@Component({
  selector: 'app-tms-popup-modal-member',
  templateUrl: './tms-popup-modal-member.component.html',
  styleUrls: ['./tms-popup-modal-member.component.scss']
})
export class TmsPopupModalMemberComponent implements OnInit {
  gridData: User[] = [];
  gridColumns: MemberColumn[] = [];
  modalConst: any;

  constructor(private _userService: UserService) {
    this.gridData = _userService.getUsers();
    this.gridColumns = MemberColumns;
    this.modalConst = MODAL_MEMBER_CONSTANTS;
  }

  ngOnInit(): void {
  }

}
