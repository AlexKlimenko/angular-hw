import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { ConverterToMorze } from './pipes/converter-to-morze.pipe';
import { ConverterFromMorze } from './pipes/converter-from-morze.pipe';

@NgModule({
  declarations: [AppComponent, ConverterToMorze, ConverterFromMorze],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
