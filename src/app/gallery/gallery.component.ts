import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
<<<<<<< HEAD
  selector: 'app-gallery',
  templateUrl: './galery.component.html',
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
>>>>>>> master
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
