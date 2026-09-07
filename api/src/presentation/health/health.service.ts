import { Injectable } from '@nestjs/common';

@Injectable()
export class HealthService {
  getStatus(): {
    status: string;
    service: string;
  } {
    return {
      status: 'ok',
      service: 'enterprise-sales-platform-api',
    };
  }
}
