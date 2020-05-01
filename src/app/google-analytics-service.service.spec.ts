import { TestBed } from '@angular/core/testing';

import { GoogleAnalyticsServiceService } from './google-analytics-service.service';

describe('GoogleAnalyticsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GoogleAnalyticsServiceService = TestBed.get(GoogleAnalyticsServiceService);
    expect(service).toBeTruthy();
  });
});
