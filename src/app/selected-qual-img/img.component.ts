import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-img',
  template: `
    <div class="img-wrap">
      <img [src]="selectedPhoto" alt="selectedPhoto" />
    </div>
  `,
  styleUrls: ['./img.component.css']
})
export class ImgComponent {
  @Input()
  public selectedPhoto: string;
}
