import { Component, OnInit, OnDestroy } from '@angular/core';
import { SearchService, IPerson } from 'src/app/services/search.service';
import { Router, Event, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';

const { clearTimeout, setTimeout } = window;

interface IHelpItem {
  text: string;
  href: string;
}

@Component({
  selector: 'app-search-box',
  templateUrl: './search.box.component.html',
  styleUrls: ['./search.box.component.css']
})
export class SearchBoxComponent implements OnInit, OnDestroy {
  private interval: number;
  private changeInterval: number;
  private hintCount: number;
  private controledURL: string;
  private subscription: Subscription;

  public searchText: string;
  public hintList: IHelpItem[];
  public clicked = false;

  private clearHint(): void {
    this.hintList = [];
    this.hintList.slice(0);
  }

  private reloadHint(): void {
    let reloadHint: IHelpItem[] = [];
    this.searchService.searchPerson(this.searchText, this.hintCount).subscribe(
      (data: IPerson[]) => {
        reloadHint = data.map((person: IPerson) => ({
          text: `${person.name} ${person.surname}`,
          href: person.url
        }));
      },
      (err) => {
        console.log(err);
      },
      () => (this.hintList = reloadHint)
    );
  }
  showHelper() {
    this.clicked = true;
  }
  unshowHelper() {
    this.clicked = false;
  }
  public onChange(): void {
    clearTimeout(this.changeInterval);
    this.changeInterval = setTimeout(() => this.reloadHint(), this.interval);
  }

  public onSelect(hintItem: IHelpItem): void {
    this.searchText = hintItem.text;
    this.onSearch();
  }

  public onSearch(): void {
    this.router.navigate([this.controledURL], {
      queryParams: {
        q: this.searchText
      }
    });
    this.onChange();
  }

  constructor(private searchService: SearchService, private router: Router) {
    this.hintCount = 10;
    this.interval = 500;
    this.clearHint();
    this.reloadHint();
    this.controledURL = 'search';
    this.searchText = '';
  }

  public ngOnInit(): void {
    this.subscription = this.router.events.subscribe((event: Event) => {
      const searchURL = `/${this.controledURL}?q=`;
      const url = this.router.url.slice(0, searchURL.length);

      if (event instanceof NavigationEnd && url !== searchURL) {
        this.searchText = '';
      }
      this.onChange();
    });
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
