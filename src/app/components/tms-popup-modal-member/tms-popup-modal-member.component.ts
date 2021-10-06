import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {UserService} from "../../data-transfer/user.service";
import {User} from "../../shared/models/user";
import {MemberColumn, MemberColumns} from "../../shared/models/member-columns";
import {MODAL_MEMBER_CONSTANTS} from "../../shared/constants/modal-member";
import { TmsTextFieldComponent } from 'src/app/shared/components/tms-text-field/tms-text-field.component';

@Component({
  selector: 'app-tms-popup-modal-member',
  templateUrl: './tms-popup-modal-member.component.html',
  styleUrls: ['./tms-popup-modal-member.component.scss']
})
export class TmsPopupModalMemberComponent implements OnInit {
  gridData: User[] = [];
  gridColumns: MemberColumn[] = [];
  modalConst: any;

  selectedMemberIds: string[] = [];
  selectedMembers: User[] = [];

  @Input() popupVisible: boolean = false;
  @Output() onPopupHidden: EventEmitter<any> = new EventEmitter<any>();
  @Output() onModalSubmitted: EventEmitter<User[]> = new EventEmitter<User[]>();

  @ViewChild("focusInput", { static: false }) focusTextField!: TmsTextFieldComponent;

  constructor(private _userService: UserService) {
    this.gridColumns = MemberColumns;
    this.modalConst = MODAL_MEMBER_CONSTANTS;
  }

  ngOnInit(): void {
    this._userService.getUsers().subscribe(users => {
      this.gridData = users;
    });
  }

  ngOnChanges(): void {
    this.focus();
  }

  /**
   * Phương thức set focus cho input
   * Author: NQMinh (29/09/2021)
   */
   focus(): void {
    if (this.popupVisible) {
      setTimeout(() => {
        this.focusTextField.focus();
      }, 600);
    }
  }

  /**
   * Phương thức chọn thành viên
   * @param data
   * Author: NQMinh (06/10/2021)
   */
  selectionChangedHandler(data: any): void {
    this.selectedMembers = data.selectedRowsData;
  }

  /**
   * Phương thức ẩn popup
   * Author: NQMinh (03/10/2021)
   */
  hidePopup(): void {
    this.onPopupHidden.emit();
  }

  /**
   * Phương thức xử lý sự kiện khi người dùng muốn lưu các thành viên
   * Author: NQMinh (06/10/2021)
   */
  submitMembers(): void {
    this.onModalSubmitted.emit(this.selectedMembers);
  }
}
