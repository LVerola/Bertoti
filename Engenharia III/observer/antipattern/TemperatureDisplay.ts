import { TemperatureSensor } from './interfaces';
  
export class TemperatureDisplay {
    protected readonly temperatureSensor: TemperatureSensor;
    
    constructor(temperatureSensor: TemperatureSensor) {
      this.temperatureSensor = temperatureSensor;
      setInterval(this.monitorTemperature.bind(this), 100);
    }
    
    public update (temperature: Number) {
      console.info(`Display: ${temperature}`);
    }
    
    protected monitorTemperature() {
      const temperature = this.temperatureSensor.getTemperature();
      this.update(temperature);
    }
  }