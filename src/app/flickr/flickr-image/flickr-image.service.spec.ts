import {TestBed} from '@angular/core/testing';

import {FlickrImageService} from './flickr-image.service';

describe('FlickrImageService', () => {
  let service: FlickrImageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlickrImageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
