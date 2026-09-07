import { describe, expect, it } from '@jest/globals';
import { HealthService } from './health.service.js';

describe('HealthService', () => {
  it('should return a healthy API status', () => {
    const service = new HealthService();

    expect(service.getStatus()).toEqual({
      status: 'ok',
      service: 'enterprise-sales-platform-api',
    });
  });
});
