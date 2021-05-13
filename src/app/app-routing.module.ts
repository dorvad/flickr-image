import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FlickrImageComponent} from './flickr-image/flickr-image.component';

const routes: Routes = [
  {path: 'flickr/images', pathMatch: 'full', component: FlickrImageComponent},
  {path: '*', pathMatch: 'full', redirectTo: 'cloud/images'} // redirect all routes to the cloud images component
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
