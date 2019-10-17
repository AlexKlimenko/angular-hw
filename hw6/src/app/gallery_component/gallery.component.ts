import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-gallery-component',
  template: `
    <div class="gallery-wrap">
      <img [src]="photo1" alt="photo1" (click)="clickHandler(photo1)">
      <img [src]="photo2" alt="photo2" (click)="clickHandler(photo2)">
      <img [src]="photo3" alt="photo3" (click)="clickHandler(photo3)">
      <img [src]="photo4" alt="photo4" (click)="clickHandler(photo4)">
    </div>
  `,
  styleUrls: [
    './style.css'
  ]
})

export class GalleryComponent {
  @Output()
  public photoSrc: EventEmitter<string> = new EventEmitter();

  public photo1 = '../../assets/img/photo_1.jpg';
  public photo2 = '../../assets/img/photo_2.jpg';
  public photo3 = '../../assets/img/photo_3.jpg';
  public photo4 = '../../assets/img/photo_4.jpg';

  public clickHandler(srcImg: string): void {
    this.photoSrc.emit(srcImg);
  }
}
