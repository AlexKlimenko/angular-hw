import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService, IPerson } from 'src/app/services/search.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search-page',
  templateUrl: './search.page.component.html',
  styleUrls: ['./search.page.component.css']
})
export class SearchPageComponent implements OnInit, OnDestroy {
  public personList: IPerson[];
  private subscription = Subscription.EMPTY;

  public reloadContent(q: string = ''): void {
    let reloadPerson: IPerson[] = [];
    this.searchService.searchPerson(q).subscribe(
      (data: IPerson[]): void => {
        reloadPerson = data;
      },
      (err) => {
        console.log(err);
      },
      () => (this.personList = reloadPerson)
    );
  }

  constructor(
    private searchService: SearchService,
    private activateRoute: ActivatedRoute
  ) {
    this.reloadContent();
  }

  ngOnInit(): void {
    this.subscription = this.activateRoute.queryParamMap.subscribe(
      (queryParams) => {
        const q = queryParams.get('q');
        this.reloadContent(q);
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
