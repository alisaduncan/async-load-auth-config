import { Injectable } from '@angular/core';
import { AppOktaAuthConfig } from '../main';

@Injectable({
  providedIn: 'root'
})
export class AuthConfigService {
  constructor(private authConfig: AppOktaAuthConfig) {
  }

  public getConfig(): {issuer: string, clientId: string, redirectUri: string} {
    return this.authConfig.config;
  }
}

