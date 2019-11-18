import { Component, OnInit, OnDestroy } from '@angular/core';
import { ImageUpdateService } from '../services/image-update.service';
import store from '../redux/store';
import actions from '../redux/actions';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-gallery',
  templateUrl: './galery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit, OnDestroy {
  public imageGallery: string[] = [];
  private listener: Subscription;

  constructor(private service: ImageUpdateService) { }

  public imageHandler(url: string) {
    store.dispatch({ type: actions.SELECT_IMG, payload: url });
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
