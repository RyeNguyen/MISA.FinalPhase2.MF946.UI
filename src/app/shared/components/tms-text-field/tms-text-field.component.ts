import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tms-text-field',
  templateUrl: './tms-text-field.component.html',
  styleUrls: ['./tms-text-field.component.scss']
})
export class TmsTextFieldComponent implements OnInit {
  @Input() inputLabel: string = '';
  @Input() inputPlaceholder: string = '';
  @Input() isRequired: boolean = false;
  @Input() textFieldHeight: string = '40px';

  constructor() { }

  ngOnInit(): void {
  }

}
