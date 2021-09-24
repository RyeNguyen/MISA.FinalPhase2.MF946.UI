import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tms-grid',
  templateUrl: './tms-grid.component.html',
  styleUrls: ['./tms-grid.component.scss']
})
export class TmsGridComponent implements OnInit {
  @Input() gridData: any;
  @Input() taskColumns: any;

  constructor() { }

  ngOnInit(): void {
  }

  getColumnId(index: number, column: any) {
    return column['ColID'];
  }
}
