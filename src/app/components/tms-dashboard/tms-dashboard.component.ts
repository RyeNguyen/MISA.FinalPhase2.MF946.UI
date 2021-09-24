import {Component, OnInit} from '@angular/core';
import {HeaderItems} from "../../shared/models/header-items";
import {iconItem} from "../../shared/interfaces/icon-item";

@Component({
  selector: 'app-tms-dashboard',
  templateUrl: './tms-dashboard.component.html',
  styleUrls: ['./tms-dashboard.component.scss']
})
export class TmsDashboardComponent implements OnInit {
  headerItems: iconItem[];

  constructor() {
    this.headerItems = HeaderItems;
  }

  ngOnInit(): void {
  }

}
