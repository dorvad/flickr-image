import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FlickrImagesComponent} from './flickr/flickr-image/flickr-images.component';

const routes: Routes = [
  {path: 'flickr/images', pathMatch: 'full', component: FlickrImagesComponent},
  {path: '*', pathMatch: 'full', redirectTo: 'cloud/images'} // redirect all routes to the cloud images component
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
