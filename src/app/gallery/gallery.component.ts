import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './galery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  @Input()
  public photos: string[];

  @Output()
  public photoSrc: EventEmitter<string> = new EventEmitter();

  public clickHandler(imgSrc: string): void {
    this.photoSrc.emit(imgSrc);
  }
}
