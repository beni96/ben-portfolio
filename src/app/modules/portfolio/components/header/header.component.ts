import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { GoogleAnalyticsEvent } from '../../common/analytics-events';
import { FIREBASE_TOKEN } from '../../tokens/firebase-token';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() isSticky = false;
  @Input() currentPage = 0;
  @Output() pageClicked = new EventEmitter<number>();

  pages: string[] = ['Home', 'About', 'Experience', 'Skills', 'Contact'];
  isScrolled = false;
  isMenuOpened = false;

  constructor(@Inject(FIREBASE_TOKEN) private firebaseService) {}

  ngOnInit() {
    document.addEventListener('scroll', () => {
      return (this.isScrolled = window.pageYOffset > 0);
    });
  }

  onPageClick(index: number) {
    this.firebaseService.analytics().logEvent(GoogleAnalyticsEvent.HeaderPageClick);
    this.currentPage = index;
    this.pageClicked.emit(index);
    this.isMenuOpened = false;
  }

  isCurrentPage(index: number) {
    return index === this.currentPage;
  }

  toggleMenu() {
    this.firebaseService.analytics().logEvent(GoogleAnalyticsEvent.HeaderToggleMenuClick);
    this.isMenuOpened = !this.isMenuOpened;
  }
}
