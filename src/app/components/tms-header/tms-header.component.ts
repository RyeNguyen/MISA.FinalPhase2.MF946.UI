import { Component, OnInit } from '@angular/core';

import {HeaderItems} from "../../shared/models/header-items";
import {iconItem} from "../../shared/interfaces/icon-item";
import {HEADER_CONSTANTS} from "../../shared/constants/header";

@Component({
  selector: 'app-tms-header',
  templateUrl: './tms-header.component.html',
  styleUrls: ['./tms-header.component.scss']
})
export class TmsHeaderComponent implements OnInit {
  headerItems: iconItem[] = [];
  dropdownVisible: boolean = false;
  headerVariables;

  constructor() {
    this.headerItems = HeaderItems;
    this.headerVariables = HEADER_CONSTANTS;
  }

  ngOnInit(): void {
  }

  /**
   * Phương thức kích hoạt dropdown button ở header
   * Author: NQMinh (21/09/2021)
   */
  toggleDropdown() {
    this.dropdownVisible = !this.dropdownVisible;
  }
}
