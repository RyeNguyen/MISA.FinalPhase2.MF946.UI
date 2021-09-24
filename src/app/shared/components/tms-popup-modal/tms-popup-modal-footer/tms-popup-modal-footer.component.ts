import { MODAL_CONSTANTS } from '../../../constants/modal-base';
import { Component, OnInit } from '@angular/core';

import {TmsPopupService} from "../../../services/tms-popup.service";

@Component({
  selector: 'app-tms-popup-modal-footer',
  templateUrl: './tms-popup-modal-footer.component.html',
  styleUrls: ['./tms-popup-modal-footer.component.scss']
})
export class TmsPopupModalFooterComponent implements OnInit {
  modalVariables;

  constructor(private _popupService: TmsPopupService) {
    this.modalVariables = MODAL_CONSTANTS;
  }

  ngOnInit(): void {
  }

  /**
   * Phương thức call service để đóng popup
   * Author: NQMinh (23/09/2021)
   */
  hidePopup() {
    const popupVisible = false;

    //Khi đóng modal thì không quan tâm loại modal gì nên đặt bằng undefined
    const popupMode = undefined;

    this._popupService.setPopupMode(popupMode, popupVisible);
  }
}
