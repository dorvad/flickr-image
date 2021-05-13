import {TestBed} from '@angular/core/testing';

import {CloudImagesService} from './cloud-images.service';

describe('CloudImagesService', () => {
  let service: CloudImagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CloudImagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
