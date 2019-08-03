import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit {
  @Input() headerText: string;
  @Input() actionButtonText: string;
  @Output() actionButtonClick = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

}
