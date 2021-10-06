import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';

import { locale } from 'devextreme/localization';
import { TmsTextFieldComponent } from '../tms-text-field/tms-text-field.component';

@Component({
  selector: 'app-tms-popover-date',
  templateUrl: './tms-popover-date.component.html',
  styleUrls: ['./tms-popover-date.component.scss']
})
export class TmsPopoverDateComponent implements OnInit {
  @Input() popoverTarget: any;
  @Input() popoverVisible: boolean = false;
  @Output() onPopoverHidden: EventEmitter<any> = new EventEmitter();

  @ViewChild("focusInput", { static: false }) focusTextField!: TmsTextFieldComponent;

  constructor() { }

  ngOnInit(): void {
    locale("vi-VN");
  }

  ngOnChanges(): void {
    this.focus();
  }

  /**
   * Phương thức set focus cho input
   * Author: NQMinh (04/10/2021)
   */
   focus(): void {
    if (this.popoverVisible) {
      setTimeout(() => {
        this.focusTextField.focus();
      }, 400);
    }
  }

  changeValue(data: any): void {
    console.log(data);
  }

  /**
   * Phương thức ẩn popover
   * Author: NQMinh (27/09/2021)
   */
  hidePopover(): void {
    this.onPopoverHidden.emit();
  }
}
