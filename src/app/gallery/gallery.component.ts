import { Component, OnInit, OnDestroy } from '@angular/core';
import { ImageUpdateService } from '../services/image-update.service';
import store from '../redux/store';
import actions from '../redux/actions';
import { Subscription } from 'rxjs';

@Component({
<<<<<<< HEAD
  selector: 'app-gallery',
  templateUrl: './galery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit, OnDestroy {
  public imageGallery: string[] = [];
  private listener: Subscription;

  constructor(private service: ImageUpdateService) {}
=======
  selector: 'app-gallery-component',
  template: `
    <div class="gallery-wrap">
      <img [src]="photos[0]" alt="photo1" (click)="clickHandler(photos[0])" />
      <img [src]="photos[1]" alt="photo2" (click)="clickHandler(photos[1])" />
      <img [src]="photos[2]" alt="photo3" (click)="clickHandler(photos[2])" />
      <img [src]="photos[3]" alt="photo4" (click)="clickHandler(photos[3])" />
    </div>
  `,
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  @Input()
  public photos: string[];
>>>>>>> master

  public imageHandler(url: string) {
    store.dispatch({ type: actions.SELECTIMG, payload: url });
  }

  public clickHandler(url: string) {
    this.listener.unsubscribe();
    this.service.stopInterval();
    this.imageHandler(url);
    this.subscribe();
  }

  public subscribe(): void {
    this.listener = this.service.getRandomData.subscribe((data: string) => {
      this.imageHandler(data);
    });
  }

  ngOnInit(): void {
    this.imageGallery = this.service.getData();
    this.imageHandler(this.imageGallery[0]);
    this.subscribe();
  }

  ngOnDestroy(): void {
    this.listener.unsubscribe();
  }
}
