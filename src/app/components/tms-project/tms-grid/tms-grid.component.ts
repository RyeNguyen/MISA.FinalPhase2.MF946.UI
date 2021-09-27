import { Component, OnInit, Input } from '@angular/core';

import {MODAL_ENUMS} from "../../../shared/enum/modal-base";
import {ICON_SIZES} from "../../../shared/enum/icon-size";
import {doughnutItem} from "../../../shared/interfaces/doughnut-item";
import {GRID_CONSTANTS} from "../../../shared/constants/grid";

import {TmsPopupService} from "../../../shared/services/tms-popup.service";

@Component({
  selector: 'app-tms-grid',
  templateUrl: './tms-grid.component.html',
  styleUrls: ['./tms-grid.component.scss']
})
export class TmsGridComponent implements OnInit {
  @Input() gridData: any;
  @Input() taskColumns: any;
  gridConst: any;

  popupVisible: boolean = false;
  popupWidth: number = MODAL_ENUMS.ModalWidthLarge;

  constructor(private _popupService: TmsPopupService) {
    this.gridConst = GRID_CONSTANTS;
  }

  ngOnInit(): void {
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
        val: data.value
      },
      {
        region: 'unfinishedTask',
        val: 100 - data.value
      }
    ]
    return doughnutData;
  }
}
