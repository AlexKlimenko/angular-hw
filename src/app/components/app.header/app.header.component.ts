import { Component } from '@angular/core';

interface IUser {
  name: string;
  surname: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './app.header.component.html',
  styleUrls: ['./app.header.component.css']
})
export class AppHeaderComponent {
  public user: IUser;

  constructor() {
    this.user = {
      name: 'Alex',
      surname: 'K'
    };
  }
}
