import { DepartmentService } from './../../data-transfer/department.service';
import { Component, OnInit } from '@angular/core';

import { iconItem } from '../../shared/interfaces/icon-item';
import { SidebarItems } from '../../shared/models/sidebar-items';

@Component({
  selector: 'app-tms-sidebar',
  templateUrl: './tms-sidebar.component.html',
  styleUrls: ['./tms-sidebar.component.scss'],
})
export class TmsSidebarComponent implements OnInit {
  sidebarItems: iconItem[] = [];
  searchedData: any;
  searchKeyword: string = '';
  onSearching: boolean = false;
  defaultUser: string = '5e6695e2-5aad-3241-6c1a-bb545470e80c';

  constructor(private _departmentService: DepartmentService) {
    this.sidebarItems = SidebarItems;
  }

  ngOnInit(): void {
    this.loadData();
  }

  /**
   * phương thức call api lấy dữ liệu lọc cho phòng ban và dự án
   * Author: NQMinh (04/10/2021)
   * 5e6695e2-5aad-3241-6c1a-bb545470e80c
   */
  loadData(): void {
    this._departmentService
      .getFilteredDepartments(this.defaultUser, this.searchKeyword)
      .subscribe((data) => {
        this.searchedData = data;
      });
  }

  /**
   * Phương thức thay đổi từ khóa tìm kiếm của api
   * @param data
   * Author: NQMinh (04/10/2021)
   */
  searchData(data: string): void {
    this.searchKeyword = data;

    if (this.searchKeyword === '') {
      this.onSearching = false;
    } else {
      this.onSearching = true;
    }

    this.loadData();
  }
}
