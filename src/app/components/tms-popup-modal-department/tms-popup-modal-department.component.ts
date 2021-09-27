import { Component, OnInit } from '@angular/core';

import { MODAL_DEPARTMENT_CONSTANTS } from 'src/app/shared/constants/modal-department';
import {MODAL_MEMBER_CONSTANTS} from "../../shared/constants/modal-member";
import {MODAL_ENUMS} from "../../shared/enum/modal-base";
import {TmsPopupService} from "../../shared/services/tms-popup.service";

@Component({
  selector: 'app-tms-popup-modal-department',
  templateUrl: './tms-popup-modal-department.component.html',
  styleUrls: ['./tms-popup-modal-department.component.scss']
})
export class TmsPopupModalDepartmentComponent implements OnInit {
  modalDepartmentVariables: any;
  selectMemberButton: any;
  innerVisible: boolean = false;
  popupTitle: string = MODAL_MEMBER_CONSTANTS.ModalTitle;
  popupWidth: number = MODAL_ENUMS.ModalWidthHuge;

  constructor(private _popupService: TmsPopupService) {
    this.modalDepartmentVariables = MODAL_DEPARTMENT_CONSTANTS;
    this.selectMemberButton = {
      icon: '../../../assets/icons/tms-icon-pick-doer-blue.svg',
      text: 'Chọn',
      onClick: () => {
        this.innerVisible = true;
        const popupVisible = true;
        const popupMode = 3;
        this._popupService.setPopupMode(popupMode, popupVisible);
      }
    }
  }

  ngOnInit(): void {
  }
}
