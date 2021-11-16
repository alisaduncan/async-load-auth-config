import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppAuthConfig } from './app-auth-config';

@Injectable({
  providedIn: 'root'
})
export class AuthConfigService {
  private config: AppAuthConfig | undefined;

  constructor(private http: HttpClient) {
  }

  public getConfig(): AppAuthConfig | undefined {
    // ideally this should be placed in state or someplace more sustainable
    if (this.config === undefined) {
      this.http.get<AppAuthConfig>('http://localhost:3000/config').subscribe(res => this.config = res);
    }
    return this.config;
  }
}

