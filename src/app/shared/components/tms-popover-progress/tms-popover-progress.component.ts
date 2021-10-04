import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {TmsTextFieldComponent} from "../tms-text-field/tms-text-field.component";

@Component({
  selector: 'app-tms-popover-progress',
  templateUrl: './tms-popover-progress.component.html',
  styleUrls: ['./tms-popover-progress.component.scss']
})
export class TmsPopoverProgressComponent implements OnInit {
  @Input() popoverValue: number = 0;
  @Input() popoverTarget: any;
  @Input() popoverVisible: boolean = false;
  @Output() onPopoverHidden: EventEmitter<any> = new EventEmitter();
  @Output() onPopoverSubmitted: EventEmitter<any> = new EventEmitter();

  @ViewChild("focusInput", { static: false }) focusTextField!: TmsTextFieldComponent;

  progressValue: any;
  popoverName: string = 'Progress';

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.focus();
    this.progressValue = this.popoverValue;
  }

  /**
   * Phương thức set focus cho input
   * Author: NQMinh (29/09/2021)
   */
  focus(): void {
    if (this.popoverVisible) {
      setTimeout(() => {
        this.focusTextField.focus();
      }, 400);
    }
  }

  /**
   * Phương thức ẩn popover
   * Author: NQMinh (27/09/2021)
   */
  hidePopover(): void {
    this.onPopoverHidden.emit();
  }

  /**
   * Tăng giá trị tiến độ 5 đơn vị
   * Author: NQMinh (04/10/2021)
   */
  addToValue(): void {
    this.progressValue += 5;
  }

  /**
   * Giảm giá trị tiến độ 5 đơn vị
   * Author: NQMinh (04/10/2021)
   */
  minusFromValue(): void {
    this.progressValue -= 5;
  }

  /**
   * Thay đổi giá trị tiến độ bằng slider
   * @param data
   * Author: NQMinh (04/10/2021)
   */
  changeValueBySlider(data: any): void {
    this.progressValue = data.value;
  }

  /**
   * Thay đổi giá trị tiến độ bằng input
   * @param data
   * Author: NQMinh (04/10/2021)
   */
  changeValueByInput(data: any): void {
    this.progressValue = data.inputValue;
  }

  /**
   * Phương thức xử lý sự kiện khi người dùng muốn thay đổi tiến độ công việc
   * Author: NQMinh (04/10/2021)
   */
  submitProgress(): void {
    this.onPopoverSubmitted.emit({
      inputName: this.popoverName,
      inputValue: this.progressValue
    });
  }
}
