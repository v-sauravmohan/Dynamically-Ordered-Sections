import { TestBed } from '@angular/core/testing';

import { DynamicSectionBuilderService } from './dynamic-section-builder.service';

describe('DynamicSectionBuilderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DynamicSectionBuilderService = TestBed.get(DynamicSectionBuilderService);
    expect(service).toBeTruthy();
  });
});
