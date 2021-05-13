import {Component, OnInit} from '@angular/core';
import {FlickrImageService} from './flickr-image.service';

@Component({
  selector: 'app-flickr-images',
  templateUrl: './flickr-images.component.html',
  styleUrls: ['./flickr-images.component.scss']
})
export class FlickrImagesComponent implements OnInit {

  constructor(private flickrImageService: FlickrImageService) {
  }

  ngOnInit(): void {
    this.loadImages('forest');
  }

  public loadImages(searchQueryParam?: string): void {
    this.flickrImageService.loadImages(searchQueryParam).subscribe(value => {
      console.log(value);
    });
  }

}
