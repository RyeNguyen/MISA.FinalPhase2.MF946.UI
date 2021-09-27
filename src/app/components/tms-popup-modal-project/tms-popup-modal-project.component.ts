import {Component, OnInit} from '@angular/core';

import {MODAL_PROJECT_CONSTANTS} from 'src/app/shared/constants/modal-project';
import {MODAL_MEMBER_CONSTANTS} from "../../shared/constants/modal-member";
import {MODAL_ENUMS} from "../../shared/enum/modal-base";

import {DepartmentItem, DepartmentOptionDataService} from "../../data-transfer/department-option-data.service";

@Component({
  selector: 'app-tms-popup-modal-project',
  templateUrl: './tms-popup-modal-project.component.html',
  styleUrls: ['./tms-popup-modal-project.component.scss']
})
export class TmsPopupModalProjectComponent implements OnInit {
  modalProjectVariables: any;
  selectMemberButton: any;
  innerVisible: boolean = false;
  popupTitle: string = MODAL_MEMBER_CONSTANTS.ModalTitle;
  popupWidth: number = MODAL_ENUMS.ModalWidthHuge;
  departmentOptions: DepartmentItem[] = [];

  constructor(private _departmentService: DepartmentOptionDataService) {
    this.modalProjectVariables = MODAL_PROJECT_CONSTANTS;
    this.selectMemberButton = {
      icon: '../../../assets/icons/tms-icon-pick-doer-blue.svg',
      text: 'Chọn',
      onClick: () => {
        this.innerVisible = true;
      }
    }
  }

  ngOnInit(): void {
    this._departmentService.getDepartmentData().subscribe(options => {
      this.departmentOptions = options;
    });
  }
}
