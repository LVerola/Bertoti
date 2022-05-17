import { TemperatureSensor } from './interfaces';
    
export class ArduinoTemperatureSensor implements TemperatureSensor {
protected temperature: Number = 0;

constructor() {
    setInterval(this.setNewTemperature.bind(this), 2000);
}

public getTemperature(): Number {
    return this.temperature;
}

protected setNewTemperature() {
    const randomTemperature = Math.floor(Math.random() * 120);
    console.info(`New Temperature: ${randomTemperature}`);
    this.setTemperature(Math.floor(randomTemperature));
}

protected setTemperature(temperature: Number) {
    this.temperature = temperature;
}
}