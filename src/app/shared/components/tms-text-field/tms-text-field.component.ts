import {Component, OnInit, Input, ViewChild, Output, EventEmitter} from '@angular/core';
import {DxSelectBoxComponent} from "devextreme-angular";

@Component({
  selector: 'app-tms-text-field',
  templateUrl: './tms-text-field.component.html',
  styleUrls: ['./tms-text-field.component.scss']
})
export class TmsTextFieldComponent implements OnInit {
  @Input() inputName: string = '';
  @Input() inputLabel: string = '';
  @Input() inputPlaceholder: string = '';
  @Input() inputValue: any;
  @Input() isRequired: boolean = false;
  @Input() textFieldHeight: string = '40px';
  @Input() inputMode: string = 'text'
  @Input() bonusClass?: string;
  @Input() bonusButton?: any;
  @Output() onTyping: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild("focusInput", { static: false }) selectBox: DxSelectBoxComponent | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Phương thức set focus cho input
   * Author: NQMinh (29/09/2021)
   */
  focus(): void {
    if (this.selectBox) {
      this.selectBox.instance.focus();
    }
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
