enum Forecast {
  sunny,
  windy,
  cloudy,
  rainy,
}

class GetForecast {
  public forecastList: any;

  constructor(forecastList: any) {
    this.forecastList = forecastList;
  }

  public getRandomForecast(): Promise<string> {
    const index: number = this.getRandomInteger(0, (Object.values(this.forecastList).length / 2) - 1);
    return new Promise<string>((resolve: (data: string) => any, reject: (err: string) => void) => {
      if (!this.forecastList[index]) {
        reject('This is error. Data is not defined');
      }
      setTimeout(() => {
        resolve(this.forecastList[index]);
        // tslint:disable-next-line:align
      }, this.getRandomInteger());
    });
  }

  public getFastestOfRandomForecasts(numOfElements: number) {
    Promise.race(this.getPromiseList(numOfElements))
      .then(res => console.log(`The fastest of random forecast is ${res}`))
      .catch(err => console.log(err));
  }

  public getOftenOfRandomForecasts(numOfElements: number) {
    Promise.all(this.getPromiseList(numOfElements))
      .then((res) => {
        return Object.values(res);
      })
      .then(res => this.sortByFrequency(res))
      .then(res => console.log(`Most often repeated weather forecast is ${res[0]}`))
      .catch(err => console.log(err));
  }

  private sortByFrequency(forecastList: any[]) {
    const frequency: { [k: string]: number } = {};
    forecastList.forEach(value => frequency[value] = 0);
    // tslint:disable-next-line:no-increment-decrement
    const uniques = forecastList.filter(value => ++frequency[value] === 1);
    return uniques.sort((a, b) => (frequency[b] - frequency[a]));
  }

  private getPromiseList(numOfElements: number): any[] {
    const arrOfPromises1 = [];
    // tslint:disable-next-line:no-increment-decrement
    for (let i = 0; i < numOfElements; i++) {
      arrOfPromises1.push(this.getRandomForecast());
    }
    return arrOfPromises1;
  }

  private getRandomInteger(intervalStart: number = 500, intervalEnd: number = 3000): number {
    return Math.round(intervalStart - 0.5 + Math.random() * (intervalEnd - intervalStart + 1));
  }
}

const getForecast: GetForecast = new GetForecast(Forecast);

getForecast.getRandomForecast()
  .then((data: string) => {
    console.log(data);
  });

getForecast.getFastestOfRandomForecasts(4);
getForecast.getOftenOfRandomForecasts(40);
