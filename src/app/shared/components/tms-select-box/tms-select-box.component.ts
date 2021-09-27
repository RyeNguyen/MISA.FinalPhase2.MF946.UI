import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tms-select-box',
  templateUrl: './tms-select-box.component.html',
  styleUrls: ['./tms-select-box.component.scss']
})
export class TmsSelectBoxComponent implements OnInit {
  @Input() selectBoxLabel: string = '';
  @Input() inputPlaceholder: string = '';
  @Input() inputHeight: string = '40px';
  @Input() selectBoxData?: any;

  constructor() { }

  ngOnInit(): void {
  }

}
