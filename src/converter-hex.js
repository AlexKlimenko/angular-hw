class Octal {
    constructor() {
    }
    convertTo(num) {
        var octalString = [];
        var base = 16;
        var baseNum = num;

        if (baseNum === 0 || !num) {
            console.log('Enter a number greater than zero');
            return;
        }

        for (; baseNum > 0;) {
            octalString.unshift(baseNum % base);
            baseNum = Math.floor(baseNum / base);

        }

        const resultString = octalString.map(el => {
            el = el < 10 ? el : String.fromCharCode(el + 55);
            console.log(el);
            return el;
        });

        // console.log(el);
        // );
        console.log(octalString);

        return resultString.join('');
    }

    ///////////////////////////////////////


    convertFrom(str) {
        var base = 16;
        let convertedNumber = 0;
        let getArrayFromString = str.split('').reverse();

        getArrayFromString.forEach((el, index) => {
            convertedNumber += ~~el * base ** index;
            getArrayFromString
            console.log(convertedNumber);
        })
        return convertedNumber;
    }
}

var getOctalStringFromNumber = new Octal();
// console.log(getOctalStringFromNumber.convertTo(63));
console.log()
//# sourceMappingURL=test.js.map
// const getNumberFromOctalString = new Octal();
// getNumberFromOctalString.convertFrom('50');