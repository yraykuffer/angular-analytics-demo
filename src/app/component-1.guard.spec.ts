import { TestBed, async, inject } from '@angular/core/testing';

import { Component1Guard } from './component-1.guard';

describe('Component1Guard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Component1Guard]
    });
  });

  it('should ...', inject([Component1Guard], (guard: Component1Guard) => {
    expect(guard).toBeTruthy();
  }));
});
