import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { PortfolioComponent } from './portfolio.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { ExperienceCardComponent } from './components/experience-card/experience-card.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { SkillsComponent } from './components/skills/skills.component';
import { SkillCardComponent } from './components/skill-card/skill-card.component';
import { TextFieldComponent } from './components/text-field/text-field.component';
import { TermsComponent } from './components/terms/terms.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AboutComponent,
    ContactComponent,
    ExperienceCardComponent,
    ExperienceComponent,
    HeaderComponent,
    HomeComponent,
    PortfolioComponent,
    SkillCardComponent,
    SkillsComponent,
    TextFieldComponent,
    TermsComponent,
  ],
  imports: [CommonModule, TranslateModule, BrowserAnimationsModule, ReactiveFormsModule],
})
export class PortfolioModule {}
