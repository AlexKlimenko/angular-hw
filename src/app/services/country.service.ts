import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { delay, catchError } from 'rxjs/operators';

export interface CountryInfo {
  name: string;
  alpha3Code: string;
  callingCodes: string;
  flag: string;
  capital: string;
}

@Injectable({ providedIn: 'root' })

export class CountryService {
  constructor(private http: HttpClient) { }

  fetchCountiesInfo(): Observable<CountryInfo[]> {
    let params = new HttpParams();
    params = params.append('fields', 'name;capital;alpha3Code;callingCodes;flag');

    return this.http.get<CountryInfo[]>('https://restcountries.eu/rest/v2/region/europe', { params })
      .pipe(
        delay(1000),
        catchError((error) => {
          console.log(error.message);
          return throwError(error);
        })
      );
  }
}
