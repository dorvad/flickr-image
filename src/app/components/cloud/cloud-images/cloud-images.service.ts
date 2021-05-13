import {Injectable} from '@angular/core';
import {IFlickrImageItem} from '../../../models/iflickr-image';

@Injectable({
  providedIn: 'root'
})
export class CloudImagesService {

  private static readonly IMAGES = 'images';

  constructor() {
  }

  loadImages(): IFlickrImageItem[] {
    let images: IFlickrImageItem[] = [];


    const foundValues = localStorage.getItem(CloudImagesService.IMAGES);

    if (foundValues) {
      const parsedValues = JSON.parse(foundValues);

      if (parsedValues) {
        images = parsedValues;
      }
    }
    return images;
  }

  saveImage(newImage: IFlickrImageItem): void {
    const images = this.loadImages();

    const filteredImage = images.filter(value => {
      return value?.link === newImage?.link;
    });

    if (filteredImage.length === 0) {
      images.push(newImage);
      localStorage.setItem(CloudImagesService.IMAGES, JSON.stringify(images));
    }
  }

}
