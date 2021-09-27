import { Component, OnInit } from '@angular/core';
import {ReportService} from "../../../data-transfer/report.service";
import {REPORT_CONSTANTS} from "../../../shared/constants/report";

@Component({
  selector: 'app-tms-report',
  templateUrl: './tms-report.component.html',
  styleUrls: ['./tms-report.component.scss']
})
export class TmsReportComponent implements OnInit {
  reportData: any;
  reportConst: any;

  constructor(private _reportService: ReportService) {
    this.reportData = _reportService.getReportData();
    this.reportConst = REPORT_CONSTANTS;
  }

  ngOnInit(): void {
  }

}
