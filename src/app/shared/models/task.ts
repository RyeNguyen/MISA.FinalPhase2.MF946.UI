export class MISATask {
  TaskId: string;
  TaskName: string;
  Description: string;
  AssigneeId: string;
  ProjectId: string;
  ProjectName: string;
  DepartmentId: string;
  OwnerId: string;
  StartDate: string;
  DueDate: string;
  EndDate: string;
  Progress: number;
  TaskStatus: number;

  constructor(TaskId: string = '', TaskName: string = '', Description: string = '', AssigneeId: string = '', ProjectId: string = '', ProjectName: string = '', DepartmentId: string = '', OwnerId: string = '', StartDate: string = '', DueDate: string = '', EndDate: string = '', Progress: number = 0, TaskStatus: number = 1) {
    this.TaskId = TaskId;
    this.TaskName = TaskName;
    this.Description = Description;
    this.AssigneeId = AssigneeId;
    this.ProjectId = ProjectId;
    this.ProjectName = ProjectName;
    this.DepartmentId = DepartmentId;
    this.OwnerId = OwnerId;
    this.StartDate = StartDate;
    this.DueDate = DueDate;
    this.EndDate = EndDate;
    this.Progress = Progress;
    this.TaskStatus = TaskStatus;
  }
}
