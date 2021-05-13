import {Component, OnInit} from '@angular/core';
import {IFlickrImageItem} from '../../../models/iflickr-image';
import {CloudImagesService} from './cloud-images.service';

@Component({
  selector: 'app-cloud-images',
  templateUrl: './cloud-images.component.html',
  styleUrls: ['./cloud-images.component.scss']
})
export class CloudImagesComponent implements OnInit {

  images: IFlickrImageItem[] = [];

  constructor(private cloudImageService: CloudImagesService) {
  }

  ngOnInit(): void {
    this.loadImages();
  }

  loadImages(): void {
    this.images = this.cloudImageService.loadImages();
  }

  deleteImage(chosenImage: IFlickrImageItem): void {
    if (chosenImage) {
      this.cloudImageService.deleteImage(chosenImage);
      this.loadImages(); // reload images after deleting
    } else {
      console.log('Invalid deleting image!');
    }
  }

}
