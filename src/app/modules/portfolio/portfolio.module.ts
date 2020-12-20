import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { PortfolioComponent } from './portfolio.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ExperienceCardComponent } from './components/experience-card/experience-card.component';
import { ExperienceComponent } from './components/experience/experience.component';

@NgModule({
  declarations: [
    AboutComponent,
    ContactUsComponent,
    ExperienceCardComponent,
    ExperienceComponent,
    HeaderComponent,
    HomeComponent,
    PortfolioComponent,
  ],
  imports: [CommonModule, TranslateModule],
})
export class PortfolioModule {}
