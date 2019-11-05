import { Pipe, PipeTransform } from '@angular/core';
import { DictionaryService } from '../services/dictionary.service';

@Pipe({
  name: 'toMorzeConverter'
})
export class ToMorzeConverterPipe implements PipeTransform {
  constructor(private service: DictionaryService) {}
  transform(letter: string): string {
    return (
      letter
        .toLowerCase()
        .split('')
        // tslint:disable-next-line:ter-arrow-parens
        .map((item) => this.service.dictionaryMorze[item])
        .join(' ')
    );
  }
}
