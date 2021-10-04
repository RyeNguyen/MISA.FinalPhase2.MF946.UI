import {Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter} from '@angular/core';
import DateFormatter from "../../shared/utils/DateFormatter";

import {MODAL_TASK_CONSTANTS} from "../../shared/constants/modal-task";
import {POPOVER_MODES} from "../../shared/enum/popover-modes";
import {MISATask} from "../../shared/models/task";

import {TasksService} from "../../data-transfer/tasks.service";

@Component({
  selector: 'app-tms-popup-modal-task',
  templateUrl: './tms-popup-modal-task.component.html',
  styleUrls: ['./tms-popup-modal-task.component.scss']
})
export class TmsPopupModalTaskComponent implements OnInit {
  @Input() editMode: boolean = false;
  @Input() bindedData: any;
  @Input() popupVisible: boolean = false;
  @Output() onPopupHidden: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild("focusInput", {static: false}) focusTextField!: ElementRef;

  modalConst: any;

  popoverModes: any;
  popoverProgressVisible: boolean = false;
  popoverDateVisible: boolean = false;
  popoverTarget: any = '';
  inputFocus: boolean = false;
  taskData: MISATask = new MISATask();

  constructor(private _taskService: TasksService) {
    this.modalConst = MODAL_TASK_CONSTANTS;
    this.popoverModes = POPOVER_MODES;
  }

  ngOnChanges(): void {
    // if (this.bindedData) {
    //   this.taskData = JSON.parse(JSON.stringify(this.bindedData));
    // }
    this.taskData = JSON.parse(JSON.stringify(this.bindedData));


    if (this.popupVisible) {
      setTimeout(() => {
        this.focusTextField.nativeElement.focus();
      }, 600)
    }

    if (!this.popupVisible) {
      this.submitTask();
    }
  }

  ngOnInit(): void {
  }

  /**
   * Phương thức định dạng string dạng ngày tháng
   * @param date
   * Author: NQMinh (27/09/2021)
   */
  formatDate(date: string) {
    return DateFormatter.format(date);
  }

  /**
   * Phương thức mở popover khi nhấn vào nút tương ứng
   * @param e
   * Author: NQMinh (27/09/2021)
   * @param popoverMode
   */
  openPopover(e: any, popoverMode: number) {
    this.popoverTarget = e.target;
    if (popoverMode === this.popoverModes['ProgressMode']) {
      this.popoverProgressVisible = true;
    } else {
      this.popoverDateVisible = true;
    }
  }

  /**
   * Phương thức ẩn popup
   * Author: NQMinh (03/10/2021)
   */
  hidePopup() {
    this.onPopupHidden.emit();
  }

  /**
   * Lưu dữ liệu thay đổi vào 1 biến, biến này sẽ được pass vào api
   * @param data
   * Author: NQMinh (04/10/2021)
   */
  bindData(data: any) {
    // @ts-ignore
    this.taskData[data.inputName] = data.inputValue;
    this.popoverProgressVisible = false;
  }

  /**
   * Phương thức xử lý sự kiện khi nhấn Lưu
   * Author: NQMinh (04/10/2021)
   */
  submitTask(): void {
    if (this.editMode) {
      console.log(this.taskData)
      this._taskService.updateTask(this.taskData['TaskId'], this.taskData).subscribe(data => console.log(data));
    }
  }
}
