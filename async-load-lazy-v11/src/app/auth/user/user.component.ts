import { AuthState } from '@okta/okta-auth-js';
import { Component, OnInit } from '@angular/core';
import { OktaAuthStateService } from '@okta/okta-angular';
import { filter, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user',
  template: `
    <ng-container *ngIf="userName$ | async as username">
      Welcome to the app, {{username}}!
    </ng-container>
  `,
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  public userName$!: Observable<string>;

  constructor(private authStateService: OktaAuthStateService) { }

  ngOnInit(): void {
    this.userName$ = this.authStateService.authState$.pipe(
      filter((authState: AuthState) => !!authState && !!authState.idToken),
      map((authState: AuthState) => authState.idToken?.claims.name ?? 'no name')
    );
  }

}
