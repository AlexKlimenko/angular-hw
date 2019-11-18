import { Component } from '@angular/core';

interface ILogo {
  src: string;
  title: string;
  href: string;
}

@Component({
  selector: 'app-logo-small',
  templateUrl: './logo.small.component.html',
  styleUrls: ['./logo.small.component.css']
})
export class LogoSmallComponent {
  public logo: ILogo;

  constructor() {
    this.logo = {
      src: './assets/logo.png',
      title: 'SCOPE',
      href: '/'
    };
  }
}
