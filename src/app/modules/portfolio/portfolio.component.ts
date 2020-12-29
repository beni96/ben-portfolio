import { Component, ElementRef, ViewChildren } from '@angular/core';

const HOME_SECTIONS_INDEX = 0;
const ABOUT_SECTIONS_INDEX = 1;

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  aboutIndex = ABOUT_SECTIONS_INDEX;

  @ViewChildren('page') pages;

  scrollToPage(index: number) {
    const pages: ElementRef[] = this.pages.toArray();
    const blockOption = index === HOME_SECTIONS_INDEX ? 'end' :  'start';
    pages[index].nativeElement.scrollIntoView({block: blockOption});
  }
}
