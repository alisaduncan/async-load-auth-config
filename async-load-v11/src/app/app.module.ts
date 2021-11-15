import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OktaAuth } from '@okta/okta-auth-js';
import { OKTA_CONFIG, OktaAuthModule } from '@okta/okta-angular';
import { AuthConfigService } from './auth-config.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OktaAuthModule
  ],
  providers: [
    {
      provide: OKTA_CONFIG,
      deps: [AuthConfigService],
      useFactory: (authConfigService: AuthConfigService) => ({oktaAuth: new OktaAuth(authConfigService.getConfig())})
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
