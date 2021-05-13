import {Component, OnInit} from '@angular/core';
import {FlickrImageService} from './flickr-image.service';
import {FormControl, Validators} from '@angular/forms';
import {IFlickrImageItem} from '../../../models/iflickr-image';

@Component({
  selector: 'app-flickr-images',
  templateUrl: './flickr-images.component.html',
  styleUrls: ['./flickr-images.component.scss']
})
export class FlickrImagesComponent implements OnInit {

  items: IFlickrImageItem[] = [];

  searchTagFormControl = new FormControl('', [
    Validators.required
  ]);

  constructor(private flickrImageService: FlickrImageService) {
  }

  ngOnInit(): void {
  }

  loadImages(searchQueryParam?: string): void {
    this.flickrImageService.loadImages(searchQueryParam).subscribe(response => {
      console.log(response);
      this.items = response.items;
    });
  }

  saveImage(chosenImage: IFlickrImageItem): void {
    if (chosenImage != null) {
      console.log(chosenImage);
    } else {
      console.log(`Invalid chosen image!`);
    }
  }

}
