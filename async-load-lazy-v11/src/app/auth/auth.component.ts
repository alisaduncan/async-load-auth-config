import { OktaAuthStateService } from '@okta/okta-angular';
import { Component } from '@angular/core';
import { OktaAuth } from '@okta/okta-auth-js';

@Component({
  selector: 'app-auth',
  template: `
    <h2>Have you logged in yet?</h2>
    <button *ngIf="!(authStateService.authState$ | async)?.isAuthenticated" (click)="login()"> Login </button>
    <button *ngIf="(authStateService.authState$ | async)?.isAuthenticated" routerLink="user"> User info </button>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {

  constructor(public authStateService: OktaAuthStateService, public oktaAuth: OktaAuth) { }

  public async login(): Promise<void> {
    await this.oktaAuth.signInWithRedirect(); // ideally redirect to user route?
  }

}
