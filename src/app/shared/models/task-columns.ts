export class TaskColumn {
  ColID: number;
  ColField: string;
  ColName: string;
  ColWidth: number;

  constructor(ColID: number, ColField: string, ColName: string, ColWidth: number) {
    this.ColID = ColID;
    this.ColField = ColField;
    this.ColName = ColName;
    this.ColWidth = ColWidth;
  }
}

export const TaskColumns: TaskColumn[] = [
  {
    ColID: 1,
    ColField: 'TaskName',
    ColName: 'Tên công việc',
    ColWidth: 400
  },
  {
    ColID: 2,
    ColField: 'Process',
    ColName: 'Tình trạng',
    ColWidth: 376
  },
  {
    ColID: 3,
    ColField: 'TaskStatus',
    ColName: 'Trạng thái hoạt động',
    ColWidth: 200
  },
  {
    ColID: 4,
    ColField: 'EndDate',
    ColName: 'Hạn hoàn thành',
    ColWidth: 200
  },
  {
    ColID: 5,
    ColField: 'AssigneeName',
    ColName: 'Người thực hiện',
    ColWidth: 200
  }
];
