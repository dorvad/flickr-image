import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FlickrImagesComponent} from './components/flickr/flickr-image/flickr-images.component';
import {CloudImagesComponent} from './components/cloud/cloud-images/cloud-images.component';

const routes: Routes = [
  {path: 'cloud/images', pathMatch: 'full', component: CloudImagesComponent},
  {path: 'flickr/images', pathMatch: 'full', component: FlickrImagesComponent},
  {path: '**', redirectTo: 'flickr/images'} // redirect all routes to the cloud images components
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
