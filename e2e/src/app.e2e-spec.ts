import { AppPage } from './app.po';
import { browser, by, element } from 'protractor';

const NAME_TITLE = 'Ben Golan';
const WELCOME_TITLE = 'Welcome to My portfolio';
const HOME_PAGE_TITLE = 'Home';
const ABOUT_PAGE_TITLE = 'About';
const GOOGLE_URL = 'https://about.google/';
const JS_URL = 'https://www.javascript.com/';
const LINKEDIN_URL = 'https://www.linkedin.com/in/ben-golan-24359516b';
const PURPLE_COLOR = 'rgb(201, 160, 255)';
const WARNING_COLOR = 'rgb(255, 96, 96)';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('should display home titles after type animation', () => {
    browser.sleep(500);
    const titles = element.all(by.css('app-home .title'));
    expect(titles.first().getText()).toEqual(NAME_TITLE)
    expect(titles.get(1).getText()).toBe(WELCOME_TITLE);
  });

  it('should have sticky header', () => {
    const stickyHeadereader = element.all(by.css('app-header .header.sticky'));
    expect(stickyHeadereader).toBeDefined();
  });

  it('should mark home as current page by default', () => {
    const home = element(by.css('app-header .page.current-page'));
    expect(home.getText()).toEqual(HOME_PAGE_TITLE);
    expect(home).toBeDefined();
  });

  it('should scroll to a page on clicking this page name in the header', () => {
    const pages = element.all(by.css('app-header .page'));
    const about = pages.get(1);
    about.click();
    browser.sleep(1000);

    const currentPage = element(by.css('app-header .page.current-page'));
    expect(currentPage.getText()).toEqual(ABOUT_PAGE_TITLE);

    browser.executeScript('return window.pageYOffset;').then((pos) => {
      expect(pos).toBeGreaterThan(0);
    });
  });

  it('should scroll to about section on clicking about button', () => {
    const aboutButton = element(by.css('app-home button'));
    aboutButton.click();
    browser.sleep(1000);

    const currentPage = element(by.css('app-header .page.current-page'));
    expect(currentPage.getText()).toEqual(ABOUT_PAGE_TITLE);

    browser.executeScript('return window.pageYOffset;').then((pos) => {
      expect(pos).toBeGreaterThan(0);
    });
  });

  it('should change current page when the using scrolling into a page', () => {
    browser.executeScript('return window.scrollTo(0, 1500);')
    browser.sleep(1000);

    const currentPage = element(by.css('app-header .page.current-page'));
    expect(currentPage.getText()).not.toEqual(HOME_PAGE_TITLE);
  });

  it('should set box shadow to experience card on hover', () => {
    const card = element(by.css('app-experience-card .card-wrapper'));
    browser.actions().mouseMove(card).perform();

    expect(card.getCssValue('box-shadow')).toBeDefined();
  });

  it('should set links to experience card company icons', () => {
    const companiesIcons = element.all(by.css('app-experience-card .job-wrapper a'));
    const googleIcon = companiesIcons.get(1);
    expect(googleIcon.getAttribute('href')).toEqual(GOOGLE_URL);
  });

  it('should set links to skills card', () => {
    const jsCard = element.all(by.css('app-skill-card a')).first();
    expect(jsCard.getAttribute('href')).toEqual(JS_URL);
  });

  it('should set links to terms icons', () => {
    const linkedinIcon = element.all(by.css('app-terms .links a')).first();
    expect(linkedinIcon.getAttribute('href')).toEqual(LINKEDIN_URL);
  });

  it('should set purple border to input field on focusing', () => {
    const inputField = element.all(by.css('app-text-field input')).first();
    inputField.sendKeys('name');
    browser.sleep(1000);
    expect(inputField.getCssValue('border-color')).toEqual(PURPLE_COLOR);
  });

  it('should set red border to empty input field on validating', () => {
    const inputField = element.all(by.css('app-text-field input')).first();
    browser.executeScript('document.body.querySelector("app-contact button").click();')
    browser.sleep(1000);
    expect(inputField.getCssValue('border-color')).toEqual(WARNING_COLOR);
  });
});
