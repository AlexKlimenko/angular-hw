import IConverter from './converters-interface';

class Binary implements IConverter {
  public convertTo(num: number): string {
    let binaryString = '';
    let bit = 1;
    while (num >= bit) {
      // tslint:disable-next-line:no-bitwise
      binaryString = (num & bit ? 1 : 0) + binaryString;
      // tslint:disable-next-line:no-bitwise
      bit <<= 1;
    }
    return binaryString || '0';
  }

  public convertFrom(str: string): number {
    let convertedNumber = 0;
    let bit = 1;
    let len = str.length;
    // tslint:disable-next-line:no-increment-decrement
    for (; len--;) {
      convertedNumber += str[len] === '1'
        ?
        bit
        :
        0;
      // tslint:disable-next-line:no-bitwise
      bit <<= 1;
    }
    return convertedNumber;
  }
}

export default Binary;
