import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-img-component',
  template: `
    <div class="img-wrap">
      <img [src]="selectedPhoto" alt="selectedPhoto">
    </div>
  `,
  styleUrls: [
    './style.css'
  ]
})

export class ImgComponent {
  @Input()
  public selectedPhoto: string;
}
