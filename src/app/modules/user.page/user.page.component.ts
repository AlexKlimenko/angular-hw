import { Component, OnInit, OnDestroy } from '@angular/core';
import { SearchService, IPerson } from 'src/app/services/search.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

interface IPhoto {
  id: string;
  src: string;
  name?: string;
  date?: string;
}

@Component({
  selector: 'app-user-page',
  templateUrl: './user.page.component.html',
  styleUrls: ['./user.page.component.css']
})
export class UserPageComponent implements OnInit, OnDestroy {
  public person: IPerson;
  public photos: IPhoto[] = Array(24).fill({
    id: '',
    src: ''
  });
  private subscription = Subscription.EMPTY;
  private controledURL = 'user';

  private reloadContent(id: string): void {
    if (!id) {
      this.router.navigate(['**']);
    }
    let newPrs: IPerson;
    this.searchService.fakeGET_personById(id).subscribe(
      (data: IPerson) => (newPrs = data),
      err => console.log(err),
      () => (this.person = newPrs)
    );
  }

  constructor(
    private searchService: SearchService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.photos = this.photos.map(
      (el: IPhoto, i: number): IPhoto => ({
        name: `Name ${i.toString()}`,
        // tslint:disable-next-line:prefer-template
        src: `./assets/photos/photo-${('0' + i.toString()).slice(-2)}.jpg`,
        id: i.toString(),
        date: `${new Date(Math.random() * 2 * 10 ** 12)}`
      })
    );
    console.log(this.photos[1].src);
  }

  ngOnInit(): void {
    this.subscription = this.activatedRoute.queryParamMap.subscribe(
      (queryParams) => {
        const id = queryParams.get('id');

        const searchURL = `/${this.controledURL}?id=`;
        const url = this.router.url.slice(0, searchURL.length);
        if (searchURL === url) this.reloadContent(id);
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
