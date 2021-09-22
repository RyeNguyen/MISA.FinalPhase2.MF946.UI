import { Component, OnInit } from '@angular/core';

import { MODAL_DEPARTMENT_CONSTANTS } from 'src/app/shared/constants/modal-department';

@Component({
  selector: 'app-tms-popup-modal-department',
  templateUrl: './tms-popup-modal-department.component.html',
  styleUrls: ['./tms-popup-modal-department.component.scss']
})
export class TmsPopupModalDepartmentComponent implements OnInit {
  modalDepartmentVariables;

  constructor() {
    this.modalDepartmentVariables = MODAL_DEPARTMENT_CONSTANTS;
  }

  ngOnInit(): void {
  }
}
