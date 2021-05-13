import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FlickrImagesComponent} from './flickr/flickr-image/flickr-images.component';
import {CloudImagesComponent} from './cloud/cloud-images/cloud-images.component';
import {HttpClientJsonpModule, HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './navigation/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    FlickrImagesComponent,
    CloudImagesComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
