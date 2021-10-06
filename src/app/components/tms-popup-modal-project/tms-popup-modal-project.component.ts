//region Imports
import {Component, Input, OnInit, ViewChild, Output, EventEmitter} from '@angular/core';

import {MODAL_PROJECT_CONSTANTS} from 'src/app/shared/constants/modal-project';
import {MODAL_MEMBER_CONSTANTS} from "../../shared/constants/modal-member";
import {MODAL_ENUMS} from "../../shared/enum/modal-base";

import {DepartmentService} from '../../data-transfer/department.service';
import {TmsTextFieldComponent} from "../../shared/components/tms-text-field/tms-text-field.component";
import {Department} from "../../shared/models/department";
import {Project} from "../../shared/models/project";
import {ProjectService} from "../../data-transfer/project.service";
import { User } from 'src/app/shared/models/user';
//endregion

@Component({
  selector: 'app-tms-popup-modal-project',
  templateUrl: './tms-popup-modal-project.component.html',
  styleUrls: ['./tms-popup-modal-project.component.scss']
})
export class TmsPopupModalProjectComponent implements OnInit {
  //region Declares
  modalProjectVariables: any;
  selectMemberButton: any;
  innerVisible: boolean = false;
  popupTitle: string = MODAL_MEMBER_CONSTANTS.ModalTitle;
  popupWidth: number = MODAL_ENUMS.ModalWidthHuge;
  departmentOptions: Department[] = [];

  projectData: Project = new Project();
  memberList: User[] = [];

  @Input() popupVisible: boolean = false;
  @Output() onPopupHidden: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild("focusInput", { static: false }) focusTextField!: TmsTextFieldComponent;
  //endregion

  //region Constructor
  constructor(
    private _departmentService: DepartmentService,
    private _projectService: ProjectService
  ) {
    this.modalProjectVariables = MODAL_PROJECT_CONSTANTS;
    this.selectMemberButton = {
      icon: '../../../assets/icons/tms-icon-pick-doer-blue.svg',
      text: 'Chọn',
      onClick: () => {
        this.innerVisible = true;
      }
    }
  }
  //endregion

  //region Lifecycle Hooks
  ngOnInit(): void {
    this._departmentService.getAllDepartments().subscribe(departments => {
      this.departmentOptions = departments;
    });
  }

  ngOnChanges(): void {
    this.focus();
  }
  //endregion

  //region Methods
  /**
   * Phương thức set focus cho input
   * Author: NQMinh (29/09/2021)
   */
  focus(): void {
    if (this.popupVisible) {
      setTimeout(() => {
        this.focusTextField.focus();
      }, 600);
    }
  }

  /**
   * Phương thức ẩn popup
   * Author: NQMinh (03/10/2021)
   */
  hidePopup(): void {
    this.onPopupHidden.emit();
  }

  /**
   * Lưu dữ liệu thay đổi vào 1 biến, biến này sẽ được pass vào api
   * @param data
   * Author: NQMinh (03/10/2021)
   */
  bindData(data: any) {
    // @ts-ignore
    this.projectData[data.inputName] = data.inputValue;
  }

  renderMembersInfo(data: User[]): void {
    this.innerVisible = false;
    this.memberList = data;
  }

  /**
   * Phương thức call api thêm nhóm/dự án vào DB
   * Author: NQMinh (03/10/2021)
   */
  addProject(): void {
    this._projectService.addNewProject(this.projectData).subscribe(data => {
      this.hidePopup();
    })
  }
  //endregion
}
