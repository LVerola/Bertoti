import { Observer, Subject } from './interfaces';

export class TemperatureDisplay implements Observer {
  protected readonly temperatureSubject: Subject;
  
  constructor(temperatureSubject: Subject) {
    this.temperatureSubject = temperatureSubject;
    this.temperatureSubject.registerObserver(this);
  }

  public notify(temperature: Number) {
    console.info(`Display: ${temperature}`);
  }
}