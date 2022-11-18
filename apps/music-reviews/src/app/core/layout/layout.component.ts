import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'music-review-app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent implements OnInit {
  title = 'My App'
  constructor() { }

  ngOnInit(): void { }
}
