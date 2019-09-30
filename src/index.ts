let isPalindrom = (str: string): void => {
  const palindromStr = str.toLowerCase().replace(/[^а-яa-z1-9]/gi, "");
  palindromStr ===
  palindromStr
    .split("")
    .reverse()
    .join("")
    ? console.log("String is palindrom")
    : console.log("String is not palindrom");
};
isPalindrom("aBc 11C  bA");

function fibonacciArr(num: number): number[] {
  // if (num.isInteger() || num <= 0) {
  //   console.log("Set a natural number");
  //   return;
  // }

  if (num <= 0) {
    console.log("Set a natural number");
    return;
  }

  let a = 1;
  let b = 1;
  const arrOfFibonacciNums = [a, b];
  for (let i = 3; i <= num; i++) {
    const c = a + b;
    a = b;
    b = c;
    arrOfFibonacciNums.push(b);
  }
  return arrOfFibonacciNums;
}
console.log(fibonacciArr(4));
