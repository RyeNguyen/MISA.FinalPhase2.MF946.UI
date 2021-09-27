import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tms-chart-doughnut',
  templateUrl: './tms-chart-doughnut.component.html',
  styleUrls: ['./tms-chart-doughnut.component.scss']
})
export class TmsChartDoughnutComponent implements OnInit {
  fakeData: any[] = []
  data: any[] = [];
  @Input() doughnutSize: any;
  @Input() doughnutData: any;

  constructor() {
    this.fakeData = [
      {
        region: "Asia",
        val: 4119626293
      }, {
        region: "Africa",
        val: 1012956064
      }
    ]
    setTimeout(() => {
      this.data = this.doughnutData;
    }, 300)
  }

  ngOnInit(): void {
  }

}
