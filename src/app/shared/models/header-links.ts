export class HeaderLink {
  Type: number;
  Name: string;

  constructor(Type: number, Name: string) {
    this.Type = Type;
    this.Name = Name;
  }
}

export const HeaderLinks: HeaderLink[] = [
  {
    Type: 1,
    Name: 'Bảng'
  },
  {
    Type: 2,
    Name: 'Danh sách'
  },
  {
    Type: 3,
    Name: 'Gantt'
  },
  {
    Type: 4,
    Name: 'Lịch'
  },
  {
    Type: 5,
    Name: 'Tài liệu & Liên kết'
  },
  {
    Type: 6,
    Name: 'Báo cáo'
  },
  {
    Type: 7,
    Name: 'Hoạt động'
  }
]
