import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tms-popup-modal',
  templateUrl: './tms-popup-modal.component.html',
  styleUrls: ['./tms-popup-modal.component.scss']
})
export class TmsPopupModalComponent implements OnInit {
  currentTemplate: string = 'project';

  constructor() { }

  ngOnInit(): void {
  }

}
