import {MODAL_CONSTANTS} from '../../../constants/modal-base';
import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-tms-popup-modal-footer',
  templateUrl: './tms-popup-modal-footer.component.html',
  styleUrls: ['./tms-popup-modal-footer.component.scss']
})
export class TmsPopupModalFooterComponent implements OnInit {
  modalVariables: any;
  @Output() onPopupHidden: EventEmitter<any> = new EventEmitter<any>();
  @Output() onModalSubmitted: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
    this.modalVariables = MODAL_CONSTANTS;
  }

  ngOnInit(): void {
  }

  /**
   * Phương thức đóng popup
   * Author: NQMinh (23/09/2021)
   * Modified: NQMinh (03/10/2021)
   */
  hidePopup(): void {
    this.onPopupHidden.emit();
  }

  /**
   * Phương thức xử lý sự kiện khi nhấn nút Lưu
   * Author: NQMinh (03/10/2021)
   */
  submitModal(): void {
    this.onModalSubmitted.emit();
  }
}
