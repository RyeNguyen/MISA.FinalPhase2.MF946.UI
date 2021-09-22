import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tms-text-area',
  templateUrl: './tms-text-area.component.html',
  styleUrls: ['./tms-text-area.component.scss']
})
export class TmsTextAreaComponent implements OnInit {
  @Input() inputLabel: string = '';
  @Input() inputPlaceholder: string = '';
  @Input() inputHeight: string = '40px';

  constructor() { }

  ngOnInit(): void {
  }

}
