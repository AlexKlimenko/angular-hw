import { interval, Observable } from 'rxjs';
import { merge, skip, take } from 'rxjs/operators';

// !1
const publisherFibonacci = Observable.create((observer) => {
  let counter = 0;
  let a = 0;
  let b = 1;
  let c = a;

  const fib = (del) => {
    setTimeout(() => {
      observer.next(counter);
      // tslint:disable-next-line:no-increment-decrement
      counter++;

      c = a + b;
      a = b;
      b = c;
      fib(b);
      // tslint:disable-next-line:align
    }, del * 1000);
  };
  fib(b);
});

publisherFibonacci.subscribe(
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
  }
);

// !2///////////////////////////////////
const publisher1 = interval(100);
const publisher2 = interval(300)
  .pipe(merge(publisher1))
  .pipe(skip(4))
  .pipe(take(8));

publisher2.subscribe((val) => {
  // tslint:disable-next-line:no-console
  console.log(val);
});

// !3//////////////////////////////////
const observerInterval = (val): any => {
  Observable.create((observer) => {
    let counter = 0;
    setInterval(() => {
      observer.next(counter);
      // tslint:disable-next-line:no-increment-decrement
      counter++;
      // tslint:disable-next-line:align
    }, val);
  });
};

observerInterval(1000).subscribe(
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
  }
);

// !4///////////////////////////////////////
// tslint:disable-next-line:ter-arrow-parens
const observerFrom = (arr) =>
  Observable.create((observer) => {
    // tslint:disable-next-line:ter-arrow-parens
    arr.forEach((el) => observer.next(el));
  });

observerFrom([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0]).subscribe(
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
  }
);

// !5//////////////////////////////////////////////////////////
const observerFromWithDelay = (arr, val) =>
  Observable.create((observer) => {
    let index = 0;
    setInterval(() => {
      observer.next(arr[index]);
      // tslint:disable-next-line:no-increment-decrement
      index++;
      if (index === arr.length) {
        observer.complete();
      }
      // tslint:disable-next-line:align
    }, val);
  });

observerFromWithDelay([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 1000).subscribe(
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
  }
);
