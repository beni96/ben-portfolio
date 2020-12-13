import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainTemplateComponent } from './main-template.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [MainTemplateComponent, HeaderComponent],
  exports: [MainTemplateComponent],
  imports: [CommonModule],
})
export class MainTemplateModule {}
