export class TaskColumn {
  //Id của cột
  ColID: number;

  //Trường tham chiếu với dữ liệu trả về
  ColField: string;

  //Tên cột hiển thị
  ColName: string;

  //Độ rộng mặc định của cột
  ColWidth: number;

  //Kiểu dữ liệu trong cột
  ColDataType: string;

  //Định dạng kiểu dữ liệu trong cột
  ColFormat: string;

  //Customize giao diện và chức năng của các ô trong cột
  CellTemplate: string;

  constructor(ColID: number, ColField: string, ColName: string, ColWidth: number, ColDataType: string, ColFormat: string, CellTemplate: string) {
    this.ColID = ColID;
    this.ColField = ColField;
    this.ColName = ColName;
    this.ColWidth = ColWidth;
    this.ColDataType = ColDataType;
    this.ColFormat = ColFormat;
    this.CellTemplate = CellTemplate;
  }
}

export const TaskColumns: TaskColumn[] = [
  {
    ColID: 1,
    ColField: 'TaskName',
    ColName: 'Tên công việc',
    ColWidth: 635,
    ColDataType: "",
    ColFormat: "",
    CellTemplate: "popupModalCellTemplate"
  },
  {
    ColID: 2,
    ColField: 'Progress',
    ColName: 'Tình trạng công việc',
    ColWidth: 376,
    ColDataType: "",
    ColFormat: "",
    CellTemplate: "donutChartCellTemplate"
  },
  {
    ColID: 3,
    ColField: 'CreatedDate',
    ColName: 'Ngày bắt đầu',
    ColWidth: 200,
    ColDataType: "date",
    ColFormat: "dd/MM/yyyy",
    CellTemplate: "dateCellTemplate"
  },
  {
    ColID: 4,
    ColField: 'DueDate',
    ColName: 'Hạn hoàn thành',
    ColWidth: 200,
    ColDataType: "date",
    ColFormat: "dd/MM/yyyy",
    CellTemplate: "dateCellTemplate"
  },
  {
    ColID: 5,
    ColField: 'EndDate',
    ColName: 'Ngày hoàn thành thực tế',
    ColWidth: 341,
    ColDataType: "datetime",
    ColFormat: "dd/MM/yyyy hh:mm",
    CellTemplate: "normalCellTemplate"
  },
  {
    ColID: 6,
    ColField: 'AssigneeId',
    ColName: 'Người thực hiện',
    ColWidth: 200,
    ColDataType: "",
    ColFormat: "",
    CellTemplate: "userCellTemplate"
  }
];
