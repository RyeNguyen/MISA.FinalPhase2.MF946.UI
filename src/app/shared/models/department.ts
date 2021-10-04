export class Department {
  DepartmentId: any;
  DepartmentName: string;
  Description: string;
  UserId: any;

  constructor(DepartmentId: any = null, DepartmentName: string = '', Description: string = '', UserId: any = null) {
    this.DepartmentId = DepartmentId;
    this.DepartmentName = DepartmentName;
    this.Description = Description;
    this.UserId = UserId;
  }
}
