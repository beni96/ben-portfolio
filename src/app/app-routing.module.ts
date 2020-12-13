import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutViewComponent } from './modules/about-view/about-view.component';
import { ContactUsComponent } from './modules/contact-us/contact-us.component';
import { SportChannelComponent } from './modules/sport-channel/sport-channel.component';


const routes: Routes = [
  { path: '', component: AboutViewComponent },
  { path: 'about', component: AboutViewComponent },
  { path: 'sport', component: SportChannelComponent },
  { path: 'contact', component: ContactUsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
