import { Observable } from 'rxjs';

const { floor, random } = Math;

export class ImageUpdateService {
  private data = [
    'assets/img/photo_1.jpg',
    'assets/img/photo_2.jpg',
    'assets/img/photo_3.jpg',
    'assets/img/photo_4.jpg'
  ];

  public getRandomData: Observable<string> = new Observable((emitter) => {
    setInterval(() => {
      emitter.next(this.data[floor(random() * 4)]);
      // tslint:disable-next-line:align
    }, 6000);
  });

  public getData(): string[] {
    return this.data;
  }

  public stopInterval(): void {
    clearInterval();
  }
}
