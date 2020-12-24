import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill-card',
  templateUrl: './skill-card.component.html',
  styleUrls: ['./skill-card.component.scss']
})
export class SkillCardComponent {
  @Input() link: string;
  @Input() logoUrl: string;
  @Input() title: string;
  @Input() subtitle: string;
  @Input() backgroundColor: string;
}
