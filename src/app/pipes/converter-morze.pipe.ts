import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'converterMorze'
})
export class ConverterMorze implements PipeTransform {
  transform(letter: string, typeOfConvert: number): string {
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
      z: '--..',
      '.-': 'a',
      '-...': 'b',
      '-.-.': 'c',
      '-..': 'd',
      '.': 'e',
      '..-.': 'f',
      '--.': 'g',
      '....': 'h',
      '..': 'i',
      '.---': 'j',
      '-.-': 'k',
      '.-..': 'l',
      '--': 'm',
      '-.': 'n',
      '---': 'o',
      '.--.': 'p',
      '--.-': 'q',
      '.-.': 'r',
      '...': 's',
      '-': 't',
      '..-': 'u',
      '...-': 'v',
      '.--': 'w',
      '-..-': 'x',
      '-.--': 'y',
      '--..': 'z'
    };

    if (typeOfConvert === 1) {
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
    if (typeOfConvert === 2) {
      return (
        letter
          .toLowerCase()
          .split(' ')
          // tslint:disable-next-line:ter-arrow-parens
          .map((a) =>
            a
              .split(' ')
              // tslint:disable-next-line:ter-arrow-parens
              .map((b) => dictionary[b] || '')
              .join('')
          )
          .join('')
      );
    }
  }
}
