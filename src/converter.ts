export default abstract class Converter {

  protected getStringFromNumber(num: number, base: number): any[] {

    let setNum = num;
    const templateString: number[] = [];

    for (; setNum > 0;) {
      templateString.unshift(setNum % base);
      setNum = Math.floor(setNum / base);
    }

    return templateString;
  }

  protected getNumberFromString(arr: string[], base: number): number {

    let templateNumber = 0;

    arr.forEach((el, index) => {
      if (el === 'NaN') {
        console.log('An octal number can only contain digits 0 - 7');
        templateNumber = NaN;
      } else templateNumber += ~~el * base ** index;
    });

    return templateNumber;
  }
}
