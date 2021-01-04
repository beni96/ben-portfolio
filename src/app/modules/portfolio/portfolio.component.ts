import { AfterViewInit, Component, ElementRef, ViewChildren } from '@angular/core';

const HOME_SECTION_INDEX = 0;
const ABOUT_SECTION_INDEX = 1;

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements AfterViewInit {
  aboutIndex = ABOUT_SECTION_INDEX;
  pagesScrollHeight: number[] = [];
  currentPage = 0;

  @ViewChildren('page') pages;

  ngAfterViewInit() {
    this.pages.toArray().forEach((page, index) => {
      const previousPageScrollHeight = index ? this.pagesScrollHeight[index - 1] : 0;
      const pageScrollHeight = page.nativeElement.scrollHeight + previousPageScrollHeight;
      this.pagesScrollHeight.push(pageScrollHeight);
    });

    document.addEventListener('scroll', () => {
      const scrollTop = document.scrollingElement.scrollTop;
      this.currentPage = this.pagesScrollHeight.findIndex((pageScrollHeight) => pageScrollHeight > scrollTop);
    });
  }

  scrollToPage(index: number) {
    const pages: ElementRef[] = this.pages.toArray();
    const blockOption = index === HOME_SECTION_INDEX ? 'end' : 'start';
    pages[index].nativeElement.scrollIntoView({ block: blockOption });
  }
}
