import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutViewModule } from './modules/about-view/about-view.module';
import { MainTemplateModule } from './modules/main-template/main-template.module';
import { ContactUsModule } from './modules/contact-us/contact-us.module';
import { SportChannelModule } from './modules/sport-channel/sport-channel.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, MainTemplateModule, AboutViewModule, ContactUsModule, SportChannelModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
