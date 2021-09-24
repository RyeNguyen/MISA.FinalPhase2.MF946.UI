import { Component, OnInit } from '@angular/core';
import {HeaderItemsDark} from "../../shared/models/header-items-dark";

import {Customer, MockDataService} from "../../services/mock-data.service";
import {iconItem} from "../../shared/interfaces/icon-item";
import {TaskColumns} from "../../shared/models/task-columns";

@Component({
  selector: 'app-tms-project',
  templateUrl: './tms-project.component.html',
  styleUrls: ['./tms-project.component.scss']
})
export class TmsProjectComponent implements OnInit {
  tasksData: any;
  headerItems: iconItem[] = [];
  taskColumns: any;

  constructor(private service: MockDataService) {
    this.tasksData = this.service.getCustomers();
    this.headerItems = HeaderItemsDark;
    this.taskColumns = TaskColumns;
  }

  ngOnInit(): void {
  }

}
