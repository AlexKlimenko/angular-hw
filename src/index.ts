import { from, interval, of } from 'rxjs';
import { bufferCount, concatMap, delay, filter, map } from 'rxjs/operators';

// !1
const publisher1 = interval(200)
  .pipe(
    filter((val) => {
      if (val < 2) return false;
      // tslint:disable-next-line:no-increment-decrement
      for (let i = 2; i < val; i++) {
        if (val % i === 0) return false;
      }
      return true;
    }),
  )
  .pipe(bufferCount(2))
  // tslint:disable-next-line:ter-arrow-parens
  .pipe(map((val) => `${val[0] + val[1]}`));

publisher1.subscribe(
  (val) => {
    // tslint:disable-next-line:no-console
    console.log(val);
  },
  (err) => {
    // tslint:disable-next-line:no-console
    console.log(err);
  },
  () => {
    // tslint:disable-next-line:no-console
    console.log('Done');
  },
);

// !2
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const publisher2 = from(arr).pipe(
  bufferCount(3),
  // tslint:disable-next-line:ter-arrow-parens
  concatMap((val) => of(val).pipe(delay(2000))),
);

publisher2.subscribe(
  (val) => {
    // tslint:disable-next-line:no-console
    console.log(val);
  },
  (err) => {
    // tslint:disable-next-line:no-console
    console.log(err);
  },
  () => {
    // tslint:disable-next-line:no-console
    console.log('Done');
    // tslint:disable-next-line:trailing-comma
  },
);
