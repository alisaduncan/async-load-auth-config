import { Component } from '@angular/core';
import { OktaAuthStateService } from '@okta/okta-angular';
import { OktaAuth } from '@okta/okta-auth-js';

@Component({
  selector: 'app-root',
  template: `
    <button *ngIf="!(authStateService.authState$ | async)?.isAuthenticated" (click)="login()"> Login </button>
    <div *ngIf="(authStateService.authState$ | async)?.isAuthenticated === true">Logged In</div>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public authStateService: OktaAuthStateService, public oktaAuth: OktaAuth) { }

  public async login(): Promise<void> {
    await this.oktaAuth.signInWithRedirect();
  }
}
