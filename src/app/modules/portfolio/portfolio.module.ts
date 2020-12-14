import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { PortfolioComponent } from './portfolio.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';

@NgModule({
  declarations: [PortfolioComponent, HeaderComponent, AboutComponent, HomeComponent, ContactUsComponent],
  imports: [CommonModule, TranslateModule],
})
export class PortfolioModule {}
