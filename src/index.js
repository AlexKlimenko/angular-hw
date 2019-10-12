const { interval, from, of } = require('rxjs');
const { filter, bufferCount, map, delay, concatMap } = require('rxjs/operators');

//!1
const publisher1 = interval(200)
  .pipe(filter(val => {
    if (val < 2) return false;
    for (let i = 2; i < val; i++) {
      if (val % i === 0) return false;
    }
    return true;
  }))
  .pipe(bufferCount(2))
  .pipe(map(val => `${val[0] + val[1]}`));

publisher1.subscribe(
  (val) => {
    console.log(val);
  },
  (err) => {
    console.log(err);
  },
  () => {
    console.log('Done');
  }
);

//!2
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const publisher2 = from(arr)
  .pipe(bufferCount(3), concatMap((val) => of(val).pipe(delay(2000))));

publisher2.subscribe(
  (val) => {
    console.log(val);
  },
  (err) => {
    console.log(err);
  },
  () => {
    console.log('Done');
  }
);

