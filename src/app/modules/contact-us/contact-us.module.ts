import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactUsComponent } from './contact-us.component';
import { MainTemplateModule } from '../main-template/main-template.module';



@NgModule({
  declarations: [ContactUsComponent],
  imports: [CommonModule, MainTemplateModule]
})
export class ContactUsModule {}
