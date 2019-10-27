import { interval, Observable } from 'rxjs';

export class ImageUpdateService {
  public dataSource: Observable<number> = interval(6000);
}
