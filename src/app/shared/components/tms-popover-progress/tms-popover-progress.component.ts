import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-tms-popover-progress',
  templateUrl: './tms-popover-progress.component.html',
  styleUrls: ['./tms-popover-progress.component.scss']
})
export class TmsPopoverProgressComponent implements OnInit {
  @Input() popoverTarget: any;
  @Input() popoverVisible: boolean = false;
  @Output() onPopoverHidden: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Phương thức ẩn popover
   * Author: NQMinh (27/09/2021)
   */
  hidePopover(): void {
    this.onPopoverHidden.emit();
  }
}
