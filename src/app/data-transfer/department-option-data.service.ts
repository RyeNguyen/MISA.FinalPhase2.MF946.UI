import {Injectable} from '@angular/core';
import {MockDataService} from "./mock-data.service";
import {Observable, of} from "rxjs";

export class DepartmentItem {
  itemId: number;
  itemName: string;

  constructor(itemId: number, itemName: string) {
    this.itemId = itemId;
    this.itemName = itemName;
  }
}

@Injectable({
  providedIn: 'root'
})
export class DepartmentOptionDataService {
  departmentData: any;
  extractedData: DepartmentItem[] = [];

  constructor(private _dataService: MockDataService) {
    this.departmentData = _dataService.getSearchData();
  }

  /**
   * Phương thức lấy dữ liệu ID và tên các phòng ban
   * Author: NQMinh (26/09/2021)
   */
  getDepartmentData(): Observable<DepartmentItem[]> {
    let res: DepartmentItem[] = [];

    const personalDepartment = {
      itemId: this.departmentData['ProjectsPersonal']['DepartmentID'],
      itemName: this.departmentData['ProjectsPersonal']['DepartmentName']
    }
    res.push(personalDepartment);

    for (let i = 0; i < this.departmentData['Departments'].length; i++) {
      const otherDepartment = {
        itemId: this.departmentData['Departments'][i]['DepartmentID'],
        itemName: this.departmentData['Departments'][i]['DepartmentName']
      }
      res.push(otherDepartment);
    }
    return of(res);
  }
}
