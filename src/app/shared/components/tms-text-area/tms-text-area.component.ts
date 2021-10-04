import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-tms-text-area',
  templateUrl: './tms-text-area.component.html',
  styleUrls: ['./tms-text-area.component.scss']
})
export class TmsTextAreaComponent implements OnInit {
  @Input() inputName: string = '';
  @Input() inputLabel: string = '';
  @Input() inputPlaceholder: string = '';
  @Input() inputHeight: string = '40px';

  @Output() onTyping: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Phương thức xử lý sự kiện khi người dùng nhập vào ô input
   * @param data
   * Author: NQMinh (03/10/2021)
   */
  changeValue(data: any): void {
    this.onTyping.emit({
      inputName: this.inputName,
      inputValue: data.value
    });
  }
}
