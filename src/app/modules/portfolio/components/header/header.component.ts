import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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

  ngOnInit() {
    document.addEventListener('scroll', () => {
      return (this.isScrolled = window.pageYOffset > 0);
    });
  }

  onPageClick(index: number) {
    this.currentPage = index;
    this.pageClicked.emit(index);
    this.isMenuOpened = false;
  }

  isCurrentPage(index: number) {
    return index === this.currentPage;
  }

  toggleMenu() {
    this.isMenuOpened = !this.isMenuOpened;
  }
}
