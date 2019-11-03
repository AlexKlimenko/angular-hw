import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'converterToMorze'
})
export class ConverterToMorze implements PipeTransform {
  transform(letter: string): string {
    const dictionary = {
      a: '.-',
      b: '-...',
      c: '-.-.',
      d: '-..',
      e: '.',
      f: '..-.',
      g: '--.',
      h: '....',
      i: '..',
      j: '.---',
      k: '-.-',
      l: '.-..',
      m: '--',
      n: '-.',
      o: '---',
      p: '.--.',
      q: '--.-',
      r: '.-.',
      s: '...',
      t: '-',
      u: '..-',
      v: '...-',
      w: '.--',
      x: '-..-',
      y: '-.--',
      z: '--..'
    };

    return (
      letter
        .toLowerCase()
        .split('')
        // tslint:disable-next-line:ter-arrow-parens
        .map((a) =>
          a
            .split(' ')
            // tslint:disable-next-line:ter-arrow-parens
            .map((b) => dictionary[b])
            .join('')
        )
        .join(' ')
    );
  }
}
