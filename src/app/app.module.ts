import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { ToMorzeConverterPipe } from './pipes/to-morze-converter.pipe';
import { DictionaryService } from './services/dictionary.service';
import { ToLetterConverterPipe } from './pipes/to-letter-converter.pipe';

@NgModule({
  declarations: [AppComponent, ToMorzeConverterPipe, ToLetterConverterPipe],
  imports: [BrowserModule, FormsModule],
  providers: [DictionaryService],
  bootstrap: [AppComponent]
})
export class AppModule {}
