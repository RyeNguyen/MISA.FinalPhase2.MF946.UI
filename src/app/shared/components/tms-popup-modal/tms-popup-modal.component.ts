import {MODAL_ENUMS} from '../../enum/modal-base';
import {MODAL_CONSTANTS} from '../../constants/modal-base';
import {Component, OnDestroy, OnInit} from '@angular/core';

import {TmsPopupService} from "../../services/tms-popup.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-tms-popup-modal',
  templateUrl: './tms-popup-modal.component.html',
  styleUrls: ['./tms-popup-modal.component.scss']
})
export class TmsPopupModalComponent implements OnInit, OnDestroy {
  modalTemplate: string[] = [
    'departmentTemplate',
    'projectTemplate',
    'taskTemplate'
  ];
  popupVisible: boolean = false;
  currentTemplate: string = '';
  currentTemplateTitle: string = '';
  modalVariables: any;
  modalEnums: any;
  modalWidth: number = 0;
  private subscription: Subscription | undefined;

  constructor(private _popupService: TmsPopupService) {
    this.modalVariables = MODAL_CONSTANTS;
    this.modalEnums = MODAL_ENUMS;
  }

  ngOnInit(): void {
    this.subscription = this._popupService.popupVisible$.subscribe(popupVisible => {
      this.popupVisible = popupVisible;
    });

    this.subscription = this._popupService.popupMode$.subscribe(popupMode => {
      this.currentTemplate = this.modalTemplate[popupMode];
      this.setPopupTitle();
    });

    // this.currentTemplate = this.modalTemplate[2];
    // this.setPopupTitle();
  }

  /**
   * Phương thức đặt title cho modal
   * Author: NQMinh (22/09/2021)
   */
  setPopupTitle(): void {
    if (this.currentTemplate === 'departmentTemplate') {
      this.currentTemplateTitle = this.modalVariables.ModalTitleDepartment;
      this.modalWidth = this.modalEnums.ModalWidthMedium;
    }
    else if (this.currentTemplate === 'projectTemplate') {
      this.currentTemplateTitle = this.modalVariables.ModalTitleProject;
      this.modalWidth = this.modalEnums.ModalWidthBig;
    }
    else {
      this.currentTemplateTitle = this.modalVariables.ModalTitleTask;
      this.modalWidth = this.modalEnums.ModalWidthLarge;
    }
  }

  ngOnDestroy(): void {
    // @ts-ignore
    this.subscription.unsubscribe();
  }
}
