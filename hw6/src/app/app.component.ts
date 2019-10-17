import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h2>{{headerText}}</h2>
    <app-img-component [selectedPhoto]="galleryImg"></app-img-component>
    <app-gallery-component (photoSrc)=handler($event)></app-gallery-component>
  `,
  styleUrls: ['./app.component.css']
})

class AppComponent {
  public headerText = 'Homework_6';
  public galleryImg = '../../assets/img/photo_1_large.jpg';

  public handler($event: string): void {
    this.galleryImg = `${$event.slice(0, -4)}_large.jpg`;
  }
}
export { AppComponent };
