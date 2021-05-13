import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CloudImagesComponent} from './cloud-images.component';

describe('CloudImagesComponent', () => {
  let component: CloudImagesComponent;
  let fixture: ComponentFixture<CloudImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CloudImagesComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CloudImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
