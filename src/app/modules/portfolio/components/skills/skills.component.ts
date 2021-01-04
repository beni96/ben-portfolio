import { Component } from '@angular/core';
import { SkillCard } from '../../interfaces/skills';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  skills: SkillCard[] = [
    {
      link: 'https://www.javascript.com/',
      logoUrl: '/assets/icons/javascript.svg',
      title: 'Javascript',
      subtitle: 'js, ts, jsx - Strong understaing',
    },
    {
      link: 'https://angular.io/',
      logoUrl: '/assets/icons/angular.svg',
      title: 'Angular',
      subtitle: 'Angular 2+ - Strong understanding',
    },
    {
      link: 'https://rxjs-dev.firebaseapp.com/',
      logoUrl: '/assets/icons/rxjs.svg',
      title: 'RxJs',
      subtitle: 'Reactive programming using RxJs lib - Strong understaing',
    },
    {
      link: 'https://stenciljs.com/',
      logoUrl: '/assets/icons/stencil.svg',
      title: 'Web components',
      subtitle: 'Building web components library using Stencil - Strong understanding',
      backgroundColor: 'black',
    },
    {
      link: 'https://sass-lang.com/',
      logoUrl: '/assets/icons/sass.svg',
      title: 'Scss',
      subtitle: 'SCSS / CSS - Strong undersanding',
      backgroundColor: 'navy',
    },
    {
      link: 'https://reactjs.org/',
      logoUrl: '/assets/icons/react.svg',
      title: 'React',
      subtitle: 'React - Basic understanding',
    },
  ];
}
