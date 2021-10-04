import {Component, OnInit} from '@angular/core';

import {iconItem} from "../../shared/interfaces/icon-item";
import {SidebarItems} from "../../shared/models/sidebar-items";
import {SearchDataService} from "../../data-transfer/search-data.service";

@Component({
  selector: 'app-tms-sidebar',
  templateUrl: './tms-sidebar.component.html',
  styleUrls: ['./tms-sidebar.component.scss']
})
export class TmsSidebarComponent implements OnInit {
  sidebarItems: iconItem[] = [];
  searchedData: any;

  constructor(private _dataService: SearchDataService) {
    this.sidebarItems = SidebarItems;
  }

  ngOnInit(): void {
    this._dataService.getSearchData().subscribe(data => {
      this.searchedData = data;
    });
  }
}
