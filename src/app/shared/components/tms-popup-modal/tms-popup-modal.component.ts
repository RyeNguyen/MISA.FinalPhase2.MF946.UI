import {MODAL_ENUMS} from '../../enum/modal-base';
import {MODAL_CONSTANTS} from '../../constants/modal-base';
import {Component, OnDestroy, OnInit, Input, Output, EventEmitter} from '@angular/core';

import {TmsPopupService} from "../../services/tms-popup.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-tms-popup-modal',
  templateUrl: './tms-popup-modal.component.html',
  styleUrls: ['./tms-popup-modal.component.scss']
})
export class TmsPopupModalComponent implements OnInit, OnDestroy {
  modalVariables: any;
  modalEnums: any;
  private subscription: Subscription | undefined;

  //region Props
  @Input() popupVisible: boolean = false;
  @Input() modalTitle: string = '';
  @Input() modalWidth: number = 0;
  @Output() onPopupHidden: EventEmitter<any> = new EventEmitter<any>();
  //endregion

  constructor(private _popupService: TmsPopupService) {
    this.modalVariables = MODAL_CONSTANTS;
    this.modalEnums = MODAL_ENUMS;
  }

  ngOnInit(): void {}

  /**
   * Phương thức call parent để đóng popup
   * Author: NQMinh (23/09/2021)
   */
  hidePopup() {
    this.onPopupHidden.emit();
  }

  ngOnDestroy(): void {
    // @ts-ignore
    //this.subscription.unsubscribe();
  }
}
