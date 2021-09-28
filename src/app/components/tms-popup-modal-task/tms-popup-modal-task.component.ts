import { Component, OnInit, Input } from '@angular/core';
import DateFormatter from "../../shared/utils/DateFormatter";

import {MODAL_TASK_CONSTANTS} from "../../shared/constants/modal-task";
import {POPOVER_MODES} from "../../shared/enum/popover-modes";

@Component({
  selector: 'app-tms-popup-modal-task',
  templateUrl: './tms-popup-modal-task.component.html',
  styleUrls: ['./tms-popup-modal-task.component.scss']
})
export class TmsPopupModalTaskComponent implements OnInit {
  @Input() editMode: boolean = false;
  @Input() bindedData: any;
  modalConst: any;

  popoverModes: any;
  popoverProgressVisible: boolean = false;
  popoverDateVisible: boolean = false;
  popoverTarget: any = '';

  //TODO: Sau khi làm backend sẽ biết có những trường nào
  taskData: {
    TaskName: string,
    Process: number | null,
    EndDate: string,
    AssigneeName: string,
    ProjectName: string
  } = {
    TaskName: '',
    Process: null,
    EndDate: '',
    AssigneeName: '',
    ProjectName: ''
  };

  constructor() {
    this.modalConst = MODAL_TASK_CONSTANTS;
    this.popoverModes = POPOVER_MODES;
  }

  ngOnChanges(): void {
    if (this.bindedData) {
      this.taskData = JSON.parse(JSON.stringify(this.bindedData));
    }
  }

  ngOnInit(): void {}

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
}
