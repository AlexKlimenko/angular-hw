import { Component, OnInit } from '@angular/core';
import { CountryService, CountryInfo } from './services/country.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  public headerText = 'Hw-10. Country Info';
  public countryList: CountryInfo[] = [];
  public loading = false;

  constructor(private service: CountryService) { }

  ngOnInit() {
    this.fetchCountiesInfo();
  }
  fetchCountiesInfo() {
    this.loading = true;
    this.service.fetchCountiesInfo()
      .subscribe((countries) => {
        this.countryList = countries;
        this.loading = false;
      });
  }
}
