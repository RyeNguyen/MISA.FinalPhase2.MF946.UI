import { Component, OnInit, Input } from '@angular/core';

import {HeaderFunctions} from "../../shared/models/header-functions";
import {iconItem} from "../../shared/interfaces/icon-item";
import {HeaderLinks} from "../../shared/models/header-links";
import {HEADER_CONSTANTS} from "../../shared/constants/header";

import {TmsPopupService} from "../../shared/services/tms-popup.service";

@Component({
  selector: 'app-tms-header',
  templateUrl: './tms-header.component.html',
  styleUrls: ['./tms-header.component.scss']
})
export class TmsHeaderComponent implements OnInit {
  @Input() headerItems: iconItem[] = [];
  dropdownVisible: boolean = false;
  headerVariables: any;
  headerLinks: any;
  headerFunctions: iconItem[] = [];

  constructor(private _popupService: TmsPopupService) {
    this.headerLinks = HeaderLinks;
    this.headerFunctions = HeaderFunctions;
    this.headerVariables = HEADER_CONSTANTS;
  }

  ngOnInit(): void {
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
    const popupVisible = true;
    const popupMode = 2;
    this._popupService.setPopupMode(popupMode, popupVisible);
  }

  /**
   * Phương thức call service để mở popup modal tương ứng
   * @param itemId
   * Author: NQMinh (22/09/2021)
   */
  clickFunction(itemId: number) {
    this.dropdownVisible = false;
    const popupVisible = true;
    this._popupService.setPopupMode(itemId, popupVisible);
  }
}
