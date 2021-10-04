import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tms-sidebar-dropdown',
  templateUrl: './tms-sidebar-dropdown.component.html',
  styleUrls: ['./tms-sidebar-dropdown.component.scss']
})
export class TmsSidebarDropdownComponent implements OnInit {
  @Input() dropdownTitle: string = '';
  @Input() dropdownItems: any;
  @Input() onSearching: boolean = false;
  dropdownVisible: boolean = false;

  constructor() { }

  ngOnInit(): void {}

  ngOnChanges(): void {
    if (this.onSearching) {
      this.dropdownVisible = true;
    }
  }

  /**
   * Phương thức kích hoạt dropdown
   * Author: NQMinh (25/09/2021)
   */
  toggleDropdown() {
    this.dropdownVisible = !this.dropdownVisible;
  }
}
