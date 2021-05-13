import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FlickrImagesComponent} from './flickr/flickr-image/flickr-images.component';
import {CloudImagesComponent} from './cloud/cloud-images/cloud-images.component';

const routes: Routes = [
  {path: 'cloud/images', pathMatch: 'full', component: CloudImagesComponent},
  {path: 'flickr/images', pathMatch: 'full', component: FlickrImagesComponent},
  {path: '**', redirectTo: 'flickr/images'} // redirect all routes to the cloud images component
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
