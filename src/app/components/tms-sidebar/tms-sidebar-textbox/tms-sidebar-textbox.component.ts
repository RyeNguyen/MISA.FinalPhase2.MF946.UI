import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tms-sidebar-textbox',
  templateUrl: './tms-sidebar-textbox.component.html',
  styleUrls: ['./tms-sidebar-textbox.component.scss']
})
export class TmsSidebarTextboxComponent implements OnInit {
  @Output() onTyping: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Phương thức xử lý sự kiện khi người dùng nhập thông tin
   * @param data
   * Author: NQMinh (04/10/2021)
   */
  changeValue(data: any): void {
    setTimeout(() => {
      this.onTyping.emit(data.value);
    }, 300);
  }
}
