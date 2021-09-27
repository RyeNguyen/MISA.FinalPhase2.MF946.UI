import { Component, OnInit, Input } from '@angular/core';

import {HeaderFunctions} from "../../shared/models/header-functions";
import {iconItem} from "../../shared/interfaces/icon-item";
import {HeaderLinks} from "../../shared/models/header-links";
import {HEADER_CONSTANTS} from "../../shared/constants/header";
import {MODAL_ENUMS} from "../../shared/enum/modal-base";

import {TmsPopupService} from "../../shared/services/tms-popup.service";
import {MODAL_CONSTANTS} from "../../shared/constants/modal-base";
import {MODAL_DEPARTMENT_CONSTANTS} from "../../shared/constants/modal-department";
import {MODAL_PROJECT_CONSTANTS} from "../../shared/constants/modal-project";

@Component({
  selector: 'app-tms-header',
  templateUrl: './tms-header.component.html',
  styleUrls: ['./tms-header.component.scss']
})
export class TmsHeaderComponent implements OnInit {
  //region Declare
  //Biến kiểm tra popover có đang mở hay không
  dropdownVisible: boolean = false;

  //Text trên header
  headerVariables: any;

  //Các đường link trên header
  headerLinks: any;

  //Các chức năng thêm phòng ban/dự án/công việc
  headerFunctions: iconItem[] = [];

  //Biến kiểm tra link hiện tại
  currentLink: number = 0;

  //Biến kiểm tra loại popup hiện tại (phòng ban/dự án/công việc)
  currentPopupType: number = 0;

  //Các enum của modal
  modalEnums: any;

  //Biến kiểm tra popup có đang mở hay không
  popupVisible: boolean = false;

  //Title của popup
  popupTitle: string = '';

  //Độ rộng của popup
  popupWidth: number = 0;
  //endregion

  @Input() headerItems: iconItem[] = [];

  constructor(private _popupService: TmsPopupService) {
    this.headerLinks = HeaderLinks;
    this.headerFunctions = HeaderFunctions;
    this.headerVariables = HEADER_CONSTANTS;
    this.modalEnums = MODAL_ENUMS;
  }

  ngOnInit(): void {
    this._popupService.popupVisible$.subscribe(popupVisible => {
      this.popupVisible = popupVisible;
    });
  }

  /**
   * Phương thức kích hoạt dropdown button ở header
   * Author: NQMinh (21/09/2021)
   */
  toggleDropdown() {
    this.dropdownVisible = !this.dropdownVisible;
  }

  /**
   * Phương thức call service để popup thêm công việc
   * Author: NQMinh (23/09/2021)
   */
  showPopupToAdd() {
    this.popupVisible = true;
    this.currentPopupType = MODAL_ENUMS.ModalTypeTask;
    this.popupWidth = MODAL_ENUMS.ModalWidthLarge;
  }

  /**
   * Phương thức call service để mở popup modal tương ứng
   * @param itemId
   * Author: NQMinh (22/09/2021)
   */
  clickFunction(itemId: number) {
    this.popupVisible = true;

    this.dropdownVisible = false;

    this.currentPopupType = itemId;
    if (this.currentPopupType === MODAL_ENUMS.ModalTypeDepartment) {
      this.popupTitle = MODAL_DEPARTMENT_CONSTANTS.ModalTitle;
      this.popupWidth = MODAL_ENUMS.ModalWidthMedium;
    }
    else if (this.currentPopupType === MODAL_ENUMS.ModalTypeProject) {
      this.popupTitle = MODAL_PROJECT_CONSTANTS.ModalTitle;
      this.popupWidth = MODAL_ENUMS.ModalWidthBig;
    }
  }

  /**
   * Phương thức style link tương ứng ở từng page
   * @param linkIndex
   * Author: NQMinh (25/09/2021)
   */
  activeLink(linkIndex: number) {
    this.currentLink = linkIndex;
  }
}
