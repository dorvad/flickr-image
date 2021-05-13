import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlickrImageService {

  // https://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=JSONP_CALLBACK
  private static readonly FLICR_IMAGES_URL = 'https://api.flickr.com/services/feeds/photos_public.gne';

  constructor(private httpClient: HttpClient) {
  }

  public loadImages(search?: string, size?: number, page?: number): Observable<any> {
    return this.httpClient.get<any>(`${FlickrImageService.FLICR_IMAGES_URL}?tags=${search}`, {});
  }

}
