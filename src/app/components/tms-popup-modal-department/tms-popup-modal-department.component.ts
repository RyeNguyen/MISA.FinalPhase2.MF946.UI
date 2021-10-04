import {Component, Input, OnInit, ViewChild, Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';

import {MODAL_DEPARTMENT_CONSTANTS} from 'src/app/shared/constants/modal-department';
import {MODAL_MEMBER_CONSTANTS} from "../../shared/constants/modal-member";
import {MODAL_ENUMS} from "../../shared/enum/modal-base";
import {TmsTextFieldComponent} from "../../shared/components/tms-text-field/tms-text-field.component";
import {Department} from "../../shared/models/department";
import {DepartmentService} from "../../data-transfer/department.service";

@Component({
  selector: 'app-tms-popup-modal-department',
  templateUrl: './tms-popup-modal-department.component.html',
  styleUrls: ['./tms-popup-modal-department.component.scss']
})
export class TmsPopupModalDepartmentComponent implements OnInit {
  //region Declares
  modalDepartmentVariables: any;
  selectMemberButton: any;
  innerVisible: boolean = false;
  popupTitle: string = MODAL_MEMBER_CONSTANTS.ModalTitle;
  popupWidth: number = MODAL_ENUMS.ModalWidthHuge;

  departmentData: Department = new Department();

  @Input() popupVisible: boolean = false;
  @Output() onPopupHidden: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild("focusInput", { static: false }) focusTextField!: TmsTextFieldComponent;
  //endregion

  constructor(private _route: Router, private _departmentService: DepartmentService) {
    this.modalDepartmentVariables = MODAL_DEPARTMENT_CONSTANTS;
    this.selectMemberButton = {
      icon: '../../../assets/icons/tms-icon-pick-doer-blue.svg',
      text: 'Chọn',
      onClick: () => {
        this.innerVisible = true;
      }
    }
  }

  ngOnInit(): void {}

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
   * Phương thức ẩn popup
   * Author: NQMinh (03/10/2021)
   */
  hidePopup() {
    this.onPopupHidden.emit();
  }

  /**
   * Lưu dữ liệu thay đổi vào 1 biến, biến này sẽ được pass vào api
   * @param data
   * Author: NQMinh (03/10/2021)
   */
  bindData(data: any) {
    // @ts-ignore
    this.departmentData[data.inputName] = data.inputValue;
  }

  /**
   * Phương thức call api thêm phòng ban vào DB
   * Author: NQMinh (03/10/2021)
   */
  addDepartment(): void {
    this._departmentService.addNewDepartment(this.departmentData).subscribe(data => {
      this.hidePopup();
      this._route.navigate(['/dashboard']).then(r => console.log(r));
    });
  }
}
