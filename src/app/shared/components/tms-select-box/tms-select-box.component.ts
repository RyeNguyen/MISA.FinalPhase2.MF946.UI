import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-tms-select-box',
  templateUrl: './tms-select-box.component.html',
  styleUrls: ['./tms-select-box.component.scss']
})
export class TmsSelectBoxComponent implements OnInit {
  @Input() selectBoxName: string = '';
  @Input() selectBoxLabel: string = '';
  @Input() inputPlaceholder: string = '';
  @Input() inputHeight: string = '40px';
  @Input() isRequired: boolean = false;
  @Input() selectBoxData?: any;
  @Input() selectBoxValueExpression: string = '';
  @Input() selectBoxDisplayExpression: string = '';
  @Output() onSelected: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Phương thức xử lý sự kiện khi người dùng chọn các lựa chọn của dropdown
   * @param data
   * Author: NQMinh (03/10/2021)
   */
  changeValue(data: any): void {
    console.log(data)
    this.onSelected.emit({
      inputName: this.selectBoxName,
      inputValue: data.value
    })
  }
}
