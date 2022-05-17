export interface Observer {
  notify(temperature: Number): void;
}
  
export interface Subject {
  registerObserver(observer: Observer): void;
  unregisterObserver(observer: Observer): void;
  notifyObservers(): void;
}

export interface TemperatureSensor extends Subject {
  getTemperature(): Number;
}