import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ImageUpdateService } from './image-update.service/image-update.service';

@Component({
  selector: 'app-root',
  template: `
    <h2>{{ headerText }}</h2>
    <app-img [selectedPhoto]="galleryImg"></app-img>
    <app-gallery [photos]="photos" (photoSrc)="handler($event)"></app-gallery>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  public headerText = 'Homework_7';
  public photos: string[] = [];
  public galleryImg: string;
  private listener: Subscription;

  constructor(private service: ImageUpdateService) {}

  public handler($event: string): void {
    this.listener.unsubscribe();
    this.service.stopInterval();
    this.galleryImg = $event;
    this.listener = this.service.getRandomData.subscribe((data: string) => {
      this.galleryImg = data;
    });
  }

  ngOnInit(): void {
    this.photos = this.service.getData();
    this.galleryImg = this.photos[0];
    this.listener = this.service.getRandomData.subscribe((data: string) => {
      this.galleryImg = data;
    });
  }

  ngOnDestroy(): void {
    this.listener.unsubscribe();
  }
}
