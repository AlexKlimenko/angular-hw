import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
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
export class AppComponent implements DoCheck, OnInit, OnDestroy {
  public headerText = 'Homework_7';
  public photos: string[] = [];
  public galleryImg: string;
  private listener: Subscription;

  constructor(private imageUpdateService: ImageUpdateService) {}

  public handler($event: string): void {
    this.galleryImg = `${$event.slice(0, -4)}_large.jpg`;
  }

  ngOnInit(): void {
    this.photos = this.imageUpdateService.getData();
    this.galleryImg = this.photos[4];
    this.listener = this.imageUpdateService.getRandomData.subscribe(
      (data: string) => {
        this.galleryImg = data;
      }
    );
  }

  ngDoCheck(): void {
    this.listener.unsubscribe();
    this.listener = this.imageUpdateService.getRandomData.subscribe(
      (data: string) => {
        this.galleryImg = data;
      }
    );
  }

  ngOnDestroy(): void {
    this.listener.unsubscribe();
  }
}
