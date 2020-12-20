import { Component } from '@angular/core';
import { ExperienceCard } from '../../interfaces/experience';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  trendsLink = '<a target="blank" href="https://trends.google.com/">Google Trends</a>';
  visualizerLink = '<a target="blank" href="https://trends.google.com/trends/hottrends/visualize?nrow=3&ncol=3">Trends Visualizer</a>';
  yisLink = '<a target="blank" href="https://trends.google.com/trends/yis/2019">YIS</a>';
  pinpointLink = '<a target="blank" href="https://journaliststudio.google.com/pinpoint/about">PinPoint</a>';
  partnersLink = '<a target="blank" href="https://www.waze.com/partners">Waze Partners</a>';

  contentSpectory = [
    'Spectory provides professional software development solutions to organizations worldwide.',
    'Works as a vendor in Google, Tel-Aviv.',
  ];

  contentGoogle = [
    'Member of Google Trends team.',
    `Develops the front end of ${this.trendsLink}, ${this.visualizerLink}, ${this.yisLink}, ${this.pinpointLink}.`,
    '<b>Contributed to Google internal framework used by Google top products such as Search, Gmail and Photos.<b>'
  ];

  contentWaze = [
    'Member of the Waze Ecosystem team.',
    `Develops web tools for ${this.partnersLink}, report issue forms for Waze mobile app.`,
    '<b>Created a Styleguide using web components for Waze web products usage.</b>',
  ];

  contentIdf = ['Full service, worked with ERP systems.'];

  cards: ExperienceCard[] = [
    { jobTitle: 'Front End Developer', companyName: 'Spectory Ltd.', date: 'Feb 2019 - Present', contentItems: this.contentSpectory },
    { companyName: 'Google', date: 'Feb 2019 - Jan 2020', contentItems: this.contentGoogle },
    { companyName: 'Waze', date: 'Jan 2020 - Present', contentItems: this.contentWaze },
    { jobTitle: 'QA specialist', companyName: 'IDF', date: 'Mar 2016 - Nov 2018', contentItems: this.contentIdf },
  ];
}
