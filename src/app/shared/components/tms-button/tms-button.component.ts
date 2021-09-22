import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tms-button',
  templateUrl: './tms-button.component.html',
  styleUrls: ['./tms-button.component.scss']
})
export class TmsButtonComponent implements OnInit {
  @Input() buttonText: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
