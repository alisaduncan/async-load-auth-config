import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  template: `
  <h2>Welcome to this beautiful app!</h2>
  `,
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
