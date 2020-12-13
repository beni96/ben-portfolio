import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutViewComponent } from './about-view.component';
import { MainTemplateModule } from '../main-template/main-template.module';

@NgModule({
  declarations: [AboutViewComponent],
  imports: [CommonModule, MainTemplateModule]
})
export class AboutViewModule {}
