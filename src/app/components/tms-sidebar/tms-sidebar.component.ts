import { Component, OnInit } from '@angular/core';

import { iconItem } from "../../shared/interfaces/icon-item";
import { SidebarItems } from "../../shared/models/sidebar-items";

@Component({
  selector: 'app-tms-sidebar',
  templateUrl: './tms-sidebar.component.html',
  styleUrls: ['./tms-sidebar.component.scss']
})
export class TmsSidebarComponent implements OnInit {
  sidebarItems: iconItem[] = [];

  constructor() {
    this.sidebarItems = SidebarItems;
  }

  ngOnInit(): void {
  }

}
