import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Awesome product app</h1>
    <nav>
      <a routerLink="/auth">The product</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent { }
