import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SportChannelComponent } from './sport-channel.component';
import { MainTemplateModule } from '../main-template/main-template.module';



@NgModule({
  declarations: [SportChannelComponent],
  imports: [CommonModule, MainTemplateModule],
})
export class SportChannelModule {}
