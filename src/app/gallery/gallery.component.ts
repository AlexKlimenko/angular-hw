// import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ImageUpdateService } from '../services/image-update.service';
import store from '../redux/store';
import actions from '../redux/actions';

@Component({
  selector: 'app-gallery',
  templateUrl: './galery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  public imageGallery: string[] = [];

  constructor(private service: ImageUpdateService) {}

  ngOnInit(): void {
    this.imageGallery = this.service.getData();
    this.clickHandler(this.imageGallery[0]);
  }

  public clickHandler(url: string) {
    store.dispatch({ type: actions.SELECTIMG, payload: url });
  }
}
