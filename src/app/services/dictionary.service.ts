export class DictionaryService {
  public dictionaryMorze = {
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
  // tslint:disable-next-line:ter-arrow-parens
  private temp = Object.entries(this.dictionaryMorze).map((el) => el.reverse());
  // @ts-ignore
  public dictionaryLetter = Object.fromEntries(this.temp);
}
