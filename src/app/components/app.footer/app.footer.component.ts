import { Component } from '@angular/core';

interface IReferenceRec {
  link: string;
  href: string;
}

interface IReferenceСolumn {
  title: string;
  references: IReferenceRec[];
}

interface ISubscribe {
  rights: string;
  developers: string;
  href: string;
}

@Component({
  selector: 'app-footer',
  templateUrl: './app.footer.component.html',
  styleUrls: ['./app.footer.component.css']
})
export class AppFooterComponent {
  public referenceColumns: IReferenceСolumn[];
  public subscribe: ISubscribe;

  constructor() {
    this.subscribe = {
      rights: '© 2019, Kharkiv. All Rights Reserved.',
      developers: 'Website Designed & Developed...',
      href: '/'
    };
    this.referenceColumns = [
      {
        title: 'We are scope',
        references: [
          { link: 'About us', href: '/' },
          { link: 'Help', href: '/' },
          { link: 'Contact', href: '/' }
        ]
      },
      {
        title: 'For users',
        references: [
          { link: 'Scope Awards', href: '/' },
          { link: 'Terms and Conditions', href: '/' },
          { link: 'Privacy', href: '/' }
        ]
      }
    ];
  }
}
