import { MODAL_CONSTANTS } from './../../../constants/modal-base';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tms-popup-modal-footer',
  templateUrl: './tms-popup-modal-footer.component.html',
  styleUrls: ['./tms-popup-modal-footer.component.scss']
})
export class TmsPopupModalFooterComponent implements OnInit {
  modalVariables;

  constructor() {
    this.modalVariables = MODAL_CONSTANTS;
  }

  ngOnInit(): void {
  }

}
