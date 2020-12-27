import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-experience-card',
  templateUrl: './experience-card.component.html',
  styleUrls: ['./experience-card.component.scss']
})
export class ExperienceCardComponent {
  @Input() companyUrl: string;
  @Input() companyLogoUrl: string;
  @Input() jobTitle: string;
  @Input() companyName: string;
  @Input() date: string;
  @Input() contentItems: string[];
}
