import { Observable, Subscriber } from 'rxjs';

const { floor, random } = Math;

export class ImageUpdateService {
  private data = [
    'assets/img/photo_1.jpg',
    'assets/img/photo_2.jpg',
    'assets/img/photo_3.jpg',
    'assets/img/photo_4.jpg'
  ];

  public interval = null;

  public getRandomData: Observable<string> = new Observable(
    (emitter: Subscriber<string>) => {
      this.interval = setInterval(() => {
        emitter.next(this.data[floor(random() * 4)]);
        // tslint:disable-next-line:align
      }, 1000);
    }
  );

  public getData(): string[] {
    return this.data;
  }

  public stopInterval(): void {
    clearInterval(this.interval);
    this.interval = null;
  }
}
