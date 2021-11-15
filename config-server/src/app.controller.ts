import { AuthConfig } from './auth-config';
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('/config')
  getConfig(): AuthConfig {
    return {
      issuer: `https://{yourOktaDomain}/oauth2/default`,
      clientId: '{yourClientID}',
      redirectUri: 'http://localhost:4200/login/callback'
    }; 
  }
}
