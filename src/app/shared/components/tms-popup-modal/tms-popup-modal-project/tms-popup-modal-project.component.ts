import { Component, OnInit } from '@angular/core';

import { MODAL_PROJECT_CONSTANTS } from 'src/app/shared/constants/modal-project';

@Component({
  selector: 'app-tms-popup-modal-project',
  templateUrl: './tms-popup-modal-project.component.html',
  styleUrls: ['./tms-popup-modal-project.component.scss']
})
export class TmsPopupModalProjectComponent implements OnInit {
  modalProjectVariables;

  constructor() {
    this.modalProjectVariables = MODAL_PROJECT_CONSTANTS;
  }

  ngOnInit(): void {
  }
}
