// tslint:disable-next-line:import-name
import Converter from './converter';
// tslint:disable-next-line:import-name
import IConverter from './converters-interface';

export default class Octal extends Converter implements IConverter {
  constructor() {
    super();
  }

  public convertTo(num: number): string {
    if (num === 0 || !num) {
      console.log('Enter a number greater than zero');
      return;
    }
    return this.getStringFromNumber(num, 8).join('');
  }

  public convertFrom(str: string): number {
    const getArrWithoutWrongDigits: string[] = str.split('').reverse().map(el => {

      return el = el.charCodeAt(0) === 56 || el.charCodeAt(0) === 57
        ?
        'NaN'
        :
        el;

    });

    return this.getNumberFromString(getArrWithoutWrongDigits, 8);
  }
}
