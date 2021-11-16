import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthConfigService } from './auth-config.service';
import { LandingComponent } from './landing/landing.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    // There could be timing issues to retrieve config so app will need to take this into account
    {
      provide: APP_INITIALIZER,
      deps: [AuthConfigService],
      multi: true,
      useFactory: (s: AuthConfigService) => () => s.getConfig(),
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
