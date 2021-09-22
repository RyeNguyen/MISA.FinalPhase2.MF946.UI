import { MODAL_ENUMS } from './../../enum/modal-base';
import { MODAL_CONSTANTS } from './../../constants/modal-base';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tms-popup-modal',
  templateUrl: './tms-popup-modal.component.html',
  styleUrls: ['./tms-popup-modal.component.scss']
})
export class TmsPopupModalComponent implements OnInit {
  modalTemplate: string[] = [
    'departmentTemplate',
    'projectTemplate',
    'taskTemplate'
  ];

  //Đang fix cứng, sẽ sửa lại khi có thêm chức năng
  currentTemplate: string = this.modalTemplate[1];

  currentTemplateTitle: string = '';
  modalVariables;
  modalEnums;
  modalWidth: number = 0;

  constructor() {
    this.modalVariables = MODAL_CONSTANTS;
    this.modalEnums = MODAL_ENUMS

    if (this.currentTemplate === 'departmentTemplate') {
      this.currentTemplateTitle = this.modalVariables.ModalTitleDepartment;
      this.modalWidth = this.modalEnums.ModalWidthMedium;
    } else if (this.currentTemplate === 'projectTemplate') {
      this.currentTemplateTitle = this.modalVariables.ModalTitleProject;
      this.modalWidth = this.modalEnums.ModalWidthLarge;
    } else {
      this.currentTemplateTitle = this.modalVariables.ModalTitleTask;
      this.modalWidth = this.modalEnums.ModalWidthLarge;
    }
  }

  ngOnInit(): void {
  }

}
