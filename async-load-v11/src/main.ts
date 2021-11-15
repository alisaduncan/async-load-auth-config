import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

fetch('http://localhost:3000/config').then(async res => {
  const authConfigData = new AppOktaAuthConfig(await res.json());

  platformBrowserDynamic([
    { provide: AppOktaAuthConfig, useValue: authConfigData }
  ]).bootstrapModule(AppModule).catch(err => console.error(err));
});

export class AppOktaAuthConfig {
  public config: AuthConfig;
  constructor(config: AuthConfig) {
    this.config = config;
  }
}

export interface AuthConfig {
  issuer: string;
  clientId: string;
  redirectUri: string;
}
