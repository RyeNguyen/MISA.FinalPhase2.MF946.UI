import {Component, OnInit, Input, AfterContentChecked, ChangeDetectorRef} from '@angular/core';

import {MODAL_ENUMS} from "../../../shared/enum/modal-base";
import {ICON_SIZES} from "../../../shared/enum/icon-size";
import {doughnutItem} from "../../../shared/interfaces/doughnut-item";
import {GRID_CONSTANTS} from "../../../shared/constants/grid";
import {POPOVER_MODES} from "../../../shared/enum/popover-modes";

import {TmsPopupService} from "../../../shared/services/tms-popup.service";

@Component({
  selector: 'app-tms-grid',
  templateUrl: './tms-grid.component.html',
  styleUrls: ['./tms-grid.component.scss']
})
export class TmsGridComponent implements OnInit, AfterContentChecked {
  @Input() gridData: any;
  @Input() taskColumns: any;
  gridConst: any;
  popoverModes: any;

  popupVisible: boolean = false;
  popoverProgressVisible: boolean = false;
  popoverDateVisible: boolean = false;
  popoverTarget: any = '';
  popupWidth: number = MODAL_ENUMS.ModalWidthLarge;

  selectedTask: any;

  constructor(private _popupService: TmsPopupService, private cdref: ChangeDetectorRef) {
    this.gridConst = GRID_CONSTANTS;
    this.popoverModes = POPOVER_MODES;
  }

  ngOnInit(): void {}

  ngAfterContentChecked() {
    this.cdref.detectChanges();
  }

  /**
   * Phương thức lấy id của các cột
   * @param index
   * @param column
   * Author: NQMinh (24/09/2021)
   */
  getColumnId(index: number, column: any) {
    return column['ColID'];
  }

  /**
   * Phương thức lấy id của các hàng
   * @param data
   * Author: NQMinh (25/09/2021)
   */
  getRowId(data: any) {
    return data.row.rowIndex + 1;
  }

  /**
   * Phương thức lấy dữ liệu để hiển thị lên bảng
   * @param data
   * Author: NQMinh (26/09/2021)
   */
  getData(data: any) {
    //console.log(data)
    const columnIndex = data.columnIndex;
    return data.row.cells[columnIndex].text;
  }

  /**
   * Phương thức hiển thị trạng thái công việc tương ứng
   * @param data
   * Author: NQMinh (26/09/2021)
   */
  getDataStatus(data: any) {
    const columnIndex = data.columnIndex;

    if (!data.row.cells[columnIndex].text) {
      return this.gridConst.TaskStatusUnfinished;
    }

    const cellValue = parseInt(data.row.cells[columnIndex].text);
    if (cellValue >= 100) {
      return this.gridConst.TaskStatusFinishing;
    } else if (cellValue <= 0) {
      return this.gridConst.TaskStatusUnfinished;
    }
    return `${this.gridConst.TaskStatusFinishing} ${cellValue}%`;
  }

  /**
   * Phương thức kiểm tra công việc đã hoàn thành chưa
   * Author: NQMinh
   */
  checkFinished(data: any) {
    const columnIndex = data.columnIndex;
    const cellValue = parseInt(data.row.cells[columnIndex].text);
    return cellValue >= 100;
  }

  /**
   * Phương thức mở popup modal khi nhấn vào ô tương ứng
   * @param data
   * Author: NQMinh (26/09/2021)
   */
  openModal(data: any) {
    console.log(data)
    this.selectedTask = data['data'];
    this.popupVisible = true;
  }

  /**
   * Phương thức trả về kích cỡ biểu đồ tròn
   * Author: NQMinh (26/09/2021)
   */
  getDoughnutSize() {
    return {
      width: ICON_SIZES.IconSizeDefault,
      height: ICON_SIZES.IconSizeDefault
    }
  }

  /**
   * Phương thức trả về dữ liệu render lên biểu đồ tròn
   * @param data
   * Author: NQMinh (26/09/2021)
   */
  getDoughnutData(data: any) {
    let doughnutData: doughnutItem[];
    doughnutData = [
      {
        region: 'finishedTask',
        val: data.value ? data.value: 0
      },
      {
        region: 'unfinishedTask',
        val: 100 - data.value
      }
    ]
    return doughnutData;
  }

  /**
   * Phương thức mở popover khi nhấn vào ô tương ứng
   * @param e
   * Author: NQMinh (26/09/2021)
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
