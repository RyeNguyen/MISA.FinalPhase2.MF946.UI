export class Project {
  ProjectId: any;
  ProjectName: string;
  Description: string;
  DepartmentId: any;
  StartDate: string;
  EndDate: string;
  Icon: string;
  IconColor: string;
  ProjectStatus: number;

  constructor(ProjectId: any = null, ProjectName: string = '', Description: string = '', DepartmentId: any = null, StartDate: string = '', EndDate: string = '', Icon: string = '', IconColor: string = '', ProjectStatus: number = 1) {
    this.ProjectId = ProjectId;
    this.ProjectName = ProjectName;
    this.Description = Description;
    this.DepartmentId = DepartmentId;
    this.StartDate = StartDate;
    this.EndDate = EndDate;
    this.Icon = Icon;
    this.IconColor = IconColor;
    this.ProjectStatus = ProjectStatus;
  }
}
