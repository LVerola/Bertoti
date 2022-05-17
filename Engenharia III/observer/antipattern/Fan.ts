import { TemperatureSensor } from './interfaces';
  
export class Fan {
    protected temperatureSensor: TemperatureSensor;
    protected running: boolean = false;
      
    constructor(temperatureSensor: TemperatureSensor) {
      this.temperatureSensor = temperatureSensor;
      setInterval(this.monitorTemperature.bind(this), 100);
    }
      
    public update(temperature: Number) {
      console.info(`Fan read temperature ${temperature}`);
      if (temperature < 50) {
        return this.turnOff();
      }
      
      return this.turnOn();
    }
      
    protected monitorTemperature() {
      const temperature = this.temperatureSensor.getTemperature();
      this.update(temperature);
    }
      
    protected turnOn () {
      if (!this.running) {
        this.running = true;
        console.info('Fun started');
      }
    }
      
    protected turnOff () {
      if (this.running) {
        this.running = false;
        console.info('Fun stoped');
      }
    }
  }