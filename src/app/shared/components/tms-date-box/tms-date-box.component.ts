import { Component, OnInit, Input } from '@angular/core';
import { locale } from 'devextreme/localization';

@Component({
  selector: 'app-tms-date-box',
  templateUrl: './tms-date-box.component.html',
  styleUrls: ['./tms-date-box.component.scss']
})
export class TmsDateBoxComponent implements OnInit {
  @Input() dateBoxLabel: string = '';
  @Input() inputPlaceholder: string = '';
  @Input() inputHeight: string = '40px';

  constructor() { }

  ngOnInit(): void {
    locale("vi-VN");
  }

}
