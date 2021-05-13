import {Component, OnInit} from '@angular/core';
import {FlickrImageService} from './flickr-image.service';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-flickr-images',
  templateUrl: './flickr-images.component.html',
  styleUrls: ['./flickr-images.component.scss']
})
export class FlickrImagesComponent implements OnInit {

  items: any = [];

  searchTagFormControl = new FormControl('', [
    Validators.required
  ]);

  constructor(private flickrImageService: FlickrImageService) {
  }

  ngOnInit(): void {
  }

  public loadImages(searchQueryParam?: string): void {
    this.flickrImageService.loadImages(searchQueryParam).subscribe(response => {
      this.items = response.items;
    });
  }

}
