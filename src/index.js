const { Observable: { create }, interval } = require('rxjs');
const { merge, take, skip } = require('rxjs/operators');

//!1
const publisher_fibonacci = create((observer) => {
  let counter = 0;
  let a = 0;
  let b = 1;
  let c = a;

  const fib = (del) => {
    setTimeout(() => {
      observer.next(counter);
      counter++;

      c = a + b;
      a = b;
      b = c;
      fib(b);
    }, del * 1000);
  };
  fib(b);
});

publisher_fibonacci.subscribe(
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

//!2///////////////////////////////////
const publisher_1 = interval(100);
const publisher_2 = interval(300)
  .pipe(merge(publisher_1))
  .pipe(skip(4))
  .pipe(take(8));

publisher_2.subscribe(
  (val) => {
    console.log(val);
  }
)

//!3//////////////////////////////////
const observer_interval = (val) => (
  create((observer) => {
    let counter = 0;
    setInterval(() => {
      observer.next(counter);
      counter++;
    }, val);
  })
);

observer_interval(1000).subscribe(
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

//!4///////////////////////////////////////
const observer_from = (arr) => (
  create((observer) => {
    arr.forEach(el => observer.next(el));
  })
);

observer_from([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0]).subscribe(
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

//!5//////////////////////////////////////////////////////////
const observer_fromWithDelay = (arr, val) => (
  create((observer) => {
    let index = 0;
    setInterval(() => {
      observer.next(arr[index]);
      index++;
      if (index === arr.length) {
        observer.complete();
      }
    }, val);
  })
);

observer_fromWithDelay([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 1000).subscribe(
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