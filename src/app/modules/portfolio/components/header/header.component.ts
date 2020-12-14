import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() isSticky = false;

  pages: string[] = ['Home', 'About', 'Contact'];
  isScrolled = false;

  ngOnInit() {
    document.addEventListener('scroll', () => {
      return this.isScrolled = window.pageYOffset > 0;
    });
  }
}
