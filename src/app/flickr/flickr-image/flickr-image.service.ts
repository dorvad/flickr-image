import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlickrImageService {

  private static readonly JSON_CALLBACK = 'JSONP_CALLBACK';

  private static readonly FLICR_IMAGES_URL = 'https://api.flickr.com/services/feeds/photos_public.gne' +
    '?format=json&jsoncallback=' + FlickrImageService.JSON_CALLBACK;

  constructor(private httpClient: HttpClient) {
  }

  public loadImages(search?: string, size?: number, page?: number): Observable<any> {
    return this.httpClient.jsonp(`${FlickrImageService.FLICR_IMAGES_URL}&tags=${search}`, FlickrImageService.JSON_CALLBACK);
  }

}
