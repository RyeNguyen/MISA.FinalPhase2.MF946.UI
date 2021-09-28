import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { locale } from 'devextreme/localization';

@Component({
  selector: 'app-tms-popover-date',
  templateUrl: './tms-popover-date.component.html',
  styleUrls: ['./tms-popover-date.component.scss']
})
export class TmsPopoverDateComponent implements OnInit {
  @Input() popoverTarget: any;
  @Input() popoverVisible: boolean = false;
  @Output() onPopoverHidden: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    locale("vi-VN");
  }

  /**
   * Phương thức ẩn popover
   * Author: NQMinh (27/09/2021)
   */
  hidePopover(): void {
    this.onPopoverHidden.emit();
  }
}
