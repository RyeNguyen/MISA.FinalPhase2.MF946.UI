import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {HeaderItemsDark} from "../../shared/models/header-items-dark";

import {MockDataService} from "../../data-transfer/mock-data.service";
import {iconItem} from "../../shared/interfaces/icon-item";
import {TaskColumns} from "../../shared/models/task-columns";
import {PROJECT_PAGES} from "../../shared/enum/project-pages";

@Component({
  selector: 'app-tms-project',
  templateUrl: './tms-project.component.html',
  styleUrls: ['./tms-project.component.scss']
})
export class TmsProjectComponent implements OnInit {
  tasksData: any;
  headerItems: iconItem[] = [];
  taskColumns: any;
  projectPages: any;

  constructor(public router: Router, private service: MockDataService) {
    this.tasksData = this.service.getCustomers();
    this.headerItems = HeaderItemsDark;
    this.taskColumns = TaskColumns;
    this.projectPages = PROJECT_PAGES;
  }

  ngOnInit(): void {
  }

}
