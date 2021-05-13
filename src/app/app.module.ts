import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FlickrImagesComponent} from './flickr/flickr-image/flickr-images.component';
import { CloudImagesComponent } from './cloud/cloud-images/cloud-images.component';

@NgModule({
  declarations: [
    AppComponent,
    FlickrImagesComponent,
    CloudImagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
