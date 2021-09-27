import { Injectable } from '@angular/core';
import { User } from '../shared/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userList: User[] = [
    {
      Avatar: null,
      AvatarColor: "#A4CF32",
      Email: "manhduc0412@gmail.com",
      FullName: "Nguyễn Mạnh Đức",
      IsEditPermission: 0,
      JobPositionName: null,
      MISAIDEmail: "manhduc0412@gmail.com",
      MisaCode: "/000/",
      Mobile: "0986375900",
      ModifiedDate: "2021-03-12T09:20:02.000+07:00",
      OrganizationUnitID: "2779b372-8f15-4cac-8917-b07b80c8066f",
      OrganizationUnitName: "CÔNG TY CỔ PHẦN TRƯỜNG SƠN 185 CHI NHÁNH TRƯỜNG SƠN 185 HÀ TĨNH",
      RoleCode: "Administrator",
      RoleName: "Quản trị hệ thống",
      Status: 3,
      TenantID: "2086d8d4-d6f3-4c77-a4ff-966aeae19f6b",
      UserID: "56783216-e57b-4f09-93dd-69c21e92be63"
    },
    {
      Avatar: null,
      AvatarColor: "#FD9A02",
      Email: "dangdat2507@gmail.com",
      FullName: "Nguyễn Đăng Đạt",
      IsEditPermission: 1,
      JobPositionName: "Lập trình viên",
      MISAIDEmail: "dangdat2507@gmail.com",
      MisaCode: "/000/",
      Mobile: null,
      ModifiedDate: "2021-05-04T12:00:35.000+07:00",
      OrganizationUnitID: "2779b372-8f15-4cac-8917-b07b80c8066f",
      OrganizationUnitName: "CÔNG TY CỔ PHẦN TRƯỜNG SƠN 185 CHI NHÁNH TRƯỜNG SƠN 185 HÀ TĨNH",
      RoleCode: "Restrict_Task",
      RoleName: "Hạn chế",
      Status: 3,
      TenantID: "2086d8d4-d6f3-4c77-a4ff-966aeae19f6b",
      UserID: "9523f3e0-6f54-43ca-b0eb-76ec10979e29"
    },
    {
      Avatar: null,
      AvatarColor: "#A4CF32",
      Email: "duongph289@gmail.com",
      FullName: "Phạm Hải Dương",
      IsEditPermission: 1,
      JobPositionName: "Lập trình viên",
      MISAIDEmail: "duongph289@gmail.com",
      MisaCode: "/000/",
      Mobile: null,
      ModifiedDate: "2021-09-21T08:38:27.000+07:00",
      OrganizationUnitID: "2779b372-8f15-4cac-8917-b07b80c8066f",
      OrganizationUnitName: "CÔNG TY CỔ PHẦN TRƯỜNG SƠN 185 CHI NHÁNH TRƯỜNG SƠN 185 HÀ TĨNH",
      RoleCode: "Member_Task",
      RoleName: "Thành viên",
      Status: 3,
      TenantID: "2086d8d4-d6f3-4c77-a4ff-966aeae19f6b",
      UserID: "9702546f-bba6-4dbd-87d5-b66e02b0c3c1"
    }
  ];

  constructor() { }

  getUsers() {
    return this.userList;
  }
}
