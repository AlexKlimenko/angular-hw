import { interval, Observable } from 'rxjs'
import { merge, skip, take } from 'rxjs/operators'

const publisherFibonacci = Observable.create(observer => {
  let counter = 0
  let a = 0
  let b = 1
  let c = a

  const fib = del => {
    setTimeout(() => {
      observer.next(counter)
      // tslint:disable-next-line:no-increment-decrement
      counter++

      c = a + b
      a = b
      b = c
      fib(b)
    }, del * 1000)
  }
  fib(b)
})
