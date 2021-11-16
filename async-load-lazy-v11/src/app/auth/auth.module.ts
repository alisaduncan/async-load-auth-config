import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { UserComponent } from './user/user.component';
import { OKTA_CONFIG, OktaAuthModule } from '@okta/okta-angular';
import { AuthConfigService } from '../auth-config.service';
import { OktaAuth } from '@okta/okta-auth-js';


@NgModule({
  declarations: [AuthComponent, UserComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    OktaAuthModule
  ],
  providers: [
    {
      provide: OKTA_CONFIG,
      deps: [AuthConfigService],
      useFactory: (s: AuthConfigService) => ({
        oktaAuth: new OktaAuth(s.getConfig() ?? {})
      })
    }
  ]
})
export class AuthModule { }
