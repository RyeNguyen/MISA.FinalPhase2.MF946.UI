import { UserService } from './../../data-transfer/user.service';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {HeaderItemsDark} from "../../shared/models/header-items-dark";

import {TasksService} from "../../data-transfer/tasks.service";

import {iconItem} from "../../shared/interfaces/icon-item";
import {TaskColumns} from "../../shared/models/task-columns";
import {PROJECT_PAGES} from "../../shared/enum/project-pages";

@Component({
  selector: 'app-tms-project',
  templateUrl: './tms-project.component.html',
  styleUrls: ['./tms-project.component.scss']
})
export class TmsProjectComponent implements OnInit {
  userList: any;
  tasksData: any;
  headerItems: iconItem[] = [];
  taskColumns: any;
  projectPages: any;
  currentProject: any;

  constructor(
    public router: Router,
    private _currentRoute: ActivatedRoute,
    private _taskService: TasksService,
    private _userService: UserService) {
    this.headerItems = HeaderItemsDark;
    this.taskColumns = TaskColumns;
    this.projectPages = PROJECT_PAGES;
  }

  ngOnInit(): void {
    this._currentRoute.queryParams.subscribe(params => {
      this.currentProject = params['ProjectID'];
    })
    this.getTasks();
    this.getUsers();
  }

  /**
   * Phương thức call api lấy dữ liệu công việc
   * Author: NQMinh (02/10/2021)
   */
  getTasks(): void {
    this._taskService.getTasksByProject(this.currentProject).subscribe(data => {
      this.tasksData = data;
    })
  }

  /**
   * Phương thức call api lấy danh sách thành viên
   * Author: NQMinh (06/10/2021)
   */
  getUsers(): void {
    this._userService.getUsersByProject(this.currentProject).subscribe(data => {
      this.userList = data;
    })
  }
}
