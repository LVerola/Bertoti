import { ArduinoTemperatureSensor } from './ArduinoTemperatureSensor'
import { Fan } from './Fan'
import { TemperatureDisplay } from './TemperatureDisplay'

const arduinoTemperatureSensor = new ArduinoTemperatureSensor();
const fan = new Fan(arduinoTemperatureSensor);
const temperatureDisplay = new TemperatureDisplay(arduinoTemperatureSensor);

console.log(fan, temperatureDisplay);