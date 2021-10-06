import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {HeaderFunctions} from "../../shared/models/header-functions";
import {iconItem} from "../../shared/interfaces/icon-item";
import {HeaderLinks} from "../../shared/models/header-links";
import {HEADER_CONSTANTS} from "../../shared/constants/header";
import {MODAL_ENUMS} from "../../shared/enum/modal-base";

import {TmsPopupService} from "../../shared/services/tms-popup.service";
import { ProjectService } from 'src/app/data-transfer/project.service';
import {MODAL_DEPARTMENT_CONSTANTS} from "../../shared/constants/modal-department";
import {MODAL_PROJECT_CONSTANTS} from "../../shared/constants/modal-project";

@Component({
  selector: 'app-tms-header',
  templateUrl: './tms-header.component.html',
  styleUrls: ['./tms-header.component.scss']
})
export class TmsHeaderComponent implements OnInit {
  //region Declare
  //Biến kiểm tra popover có đang mở hay không
  dropdownVisible: boolean = false;

  //Text trên header
  headerVariables: any;

  //Tên dự án đang hiển thị
  headerTitle: string = '';

  //Các đường link trên header
  headerLinks: any;

  //Các chức năng thêm phòng ban/dự án/công việc
  headerFunctions: iconItem[] = [];

  //Biến kiểm tra link hiện tại
  currentLink: number = 0;

  //Biến kiểm tra loại popup hiện tại (phòng ban/dự án/công việc)
  currentPopupType: number = 0;

  //Các enum của modal
  modalEnums: any;

  //Biến kiểm tra popup có đang mở hay không
  popupVisible: boolean = false;

  //Title của popup
  popupTitle: string = '';

  //Độ rộng của popup
  popupWidth: number = 0;

  //Biến lưu dự án hiện tại
  currentProject: any;
  //endregion

  @Input() headerItems: iconItem[] = [];

  constructor(
    private _router: Router,
    private _currentRoute: ActivatedRoute,
    private _popupService: TmsPopupService,
    private _projectService: ProjectService
    ) {
    this.headerLinks = HeaderLinks;
    this.headerFunctions = HeaderFunctions;
    this.headerVariables = HEADER_CONSTANTS;
    this.modalEnums = MODAL_ENUMS;
  }

  ngOnInit(): void {
    this._popupService.popupVisible$.subscribe(popupVisible => {
      this.popupVisible = popupVisible;
    });

    //Lấy id của dự án hiện tại thông qua link
    this._currentRoute.queryParams.subscribe(params => {
      this.currentProject = params['ProjectID'];
    });

    //Lấy tên dự án hiện tại thông qua id vừa lấy
    if (this.currentProject) {
      this._projectService.getById(this.currentProject).subscribe(data => {
        this.headerTitle = data['ProjectName'];
      });
    }

    this.setDefaultActive();
  }

  /**
   * Phương thức kích hoạt dropdown button ở header
   * Author: NQMinh (21/09/2021)
   */
  toggleDropdown() {
    this.dropdownVisible = !this.dropdownVisible;
  }

  /**
   * Phương thức call service để popup thêm công việc
   * Author: NQMinh (23/09/2021)
   */
  showPopupToAdd() {
    this.popupVisible = true;
    this.currentPopupType = MODAL_ENUMS.ModalTypeTask;
    this.popupWidth = MODAL_ENUMS.ModalWidthLarge;
    this.popupTitle = '';
  }

  /**
   * Phương thức call service để mở popup modal tương ứng
   * @param itemId
   * Author: NQMinh (22/09/2021)
   */
  clickFunction(itemId: number) {
    this.popupVisible = true;

    this.dropdownVisible = false;

    this.currentPopupType = itemId;
    if (this.currentPopupType === MODAL_ENUMS.ModalTypeDepartment) {
      this.popupTitle = MODAL_DEPARTMENT_CONSTANTS.ModalTitle;
      this.popupWidth = MODAL_ENUMS.ModalWidthMedium;
    } else if (this.currentPopupType === MODAL_ENUMS.ModalTypeProject) {
      this.popupTitle = MODAL_PROJECT_CONSTANTS.ModalTitle;
      this.popupWidth = MODAL_ENUMS.ModalWidthBig;
    }
  }

  /**
   * Phương thức đặt link active mặc định trong trường hợp page reload
   * Author: NQMinh (27/09/2021)
   */
  setDefaultActive() {
    for (let i = 0; i < this.headerLinks.length; i++) {
      if (this._router.url.includes('Type=' + this.headerLinks[i]['Type'])) {
        this.currentLink = this.headerLinks[i]['Type'] - 1;
        break;
      }
    }
  }

  /**
   * Phương thức style link tương ứng ở từng page
   * @param linkIndex
   * Author: NQMinh (25/09/2021)
   */
  activeLink(linkIndex: number) {
    this.currentLink = linkIndex;
  }
}
