import {Component, EventEmitter, OnInit, Output} from '@angular/core';
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
  @Output() onPopupHidden: EventEmitter<any> = new EventEmitter<any>();

  constructor(private _userService: UserService) {
    this.gridColumns = MemberColumns;
    this.modalConst = MODAL_MEMBER_CONSTANTS;
  }

  ngOnInit(): void {
    this._userService.getUsers().subscribe(users => {
      this.gridData = users;
    });
  }

  /**
   * Phương thức ẩn popup
   * Author: NQMinh (03/10/2021)
   */
  hidePopup() {
    this.onPopupHidden.emit();
  }
}
