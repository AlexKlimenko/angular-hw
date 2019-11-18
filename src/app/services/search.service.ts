import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import {
  delay,
  skip,
  concatMap,
  bufferCount,
  finalize,
  filter,
  skipWhile,
  find,
  take
} from 'rxjs/internal/operators';

const httpUrl = 'assets/people/people.response.json';
const fakePing = 250;

export interface IPerson {
  id: string;
  url: string;
  src?: string;
  nickname?: string;
  name?: string;
  surname?: string;
  subscriben?: string;
  photos?: number;
  followers?: number;
  followings?: number;
  likes?: number;
}

@Injectable()
export class SearchService {
  private fakeGET_personArrBySearch(
    search: string = '',
    count: number = 10,
    afterId: string = ''
  ): Observable<IPerson[]> {
    return this.http
      .get<IPerson[]>(httpUrl)
      .pipe(
        delay(fakePing),
        concatMap(
          (personArr: IPerson[]): Observable<IPerson> => from(personArr)
        )
      )
      .pipe(
        skipWhile((person: IPerson): boolean =>
          afterId ? person.id !== afterId : false
        ),
        skip(afterId ? 1 : 0)
      )
      .pipe(filter((person: IPerson): boolean => this.filterPerson(person, search)))
      .pipe(bufferCount(count), take(1));
  }

  private fakeGET_personByUrl(url: string): Observable<IPerson> {
    return this.http
      .get<IPerson[]>(httpUrl)
      .pipe(
        delay(fakePing),
        concatMap(
          (personArr: IPerson[]): Observable<IPerson> => from(personArr)
        )
      )
      .pipe(find((person: IPerson): boolean => person.url === url));
  }

  public fakeGET_personById(id: string): Observable<IPerson> {
    return this.http
      .get<IPerson[]>(httpUrl)
      .pipe(
        delay(fakePing),
        concatMap(
          (personArr: IPerson[]): Observable<IPerson> => from(personArr)
        )
      )
      .pipe(find((person: IPerson): boolean => person.id === id));
  }

  private filterPerson(person: IPerson, search: string): boolean {
    const personStr = `
    ${person.name} ${person.surname}
    `.toUpperCase();
    return search
      ? search
        .toUpperCase()
        .split(' ')
        .every((str: string): boolean => personStr.includes(str))
      : true;
  }

  public searchPerson(
    search: string = '',
    count: number = 10,
    afterId: string = ''
  ): Observable<IPerson[]> {
    return this.fakeGET_personArrBySearch(search, count, afterId);
  }

  constructor(private http: HttpClient) { }
}
