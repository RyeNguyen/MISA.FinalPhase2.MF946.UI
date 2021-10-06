import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tms-popover-user',
  templateUrl: './tms-popover-user.component.html',
  styleUrls: ['./tms-popover-user.component.scss']
})
export class TmsPopoverUserComponent implements OnInit {
  @Input() userList: any;
  @Input() popoverTarget: any;
  @Input() popoverVisible: boolean = false;

  @Output() onPopoverHidden: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    console.log(this.userList);
  }

  /**
   * Phương thức xử lý sự kiện khi ẩn popover
   * Author: NQMinh (06/10/2021)
   */
  hidePopover(): void {
    this.onPopoverHidden.emit();
  }

}
