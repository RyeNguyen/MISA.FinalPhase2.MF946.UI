import { Component, OnInit } from '@angular/core';

import { iconItem } from "../../shared/interfaces/icon-item";
import { SidebarItems } from "../../shared/models/sidebar-items";
import {MockDataService} from "../../data-transfer/mock-data.service";

@Component({
  selector: 'app-tms-sidebar',
  templateUrl: './tms-sidebar.component.html',
  styleUrls: ['./tms-sidebar.component.scss']
})
export class TmsSidebarComponent implements OnInit {
  sidebarItems: iconItem[] = [];
  searchedData: any;

  constructor(private _dataService: MockDataService) {
    this.sidebarItems = SidebarItems;
    this.searchedData = _dataService.getSearchData();
  }

  ngOnInit(): void {
  }

}
