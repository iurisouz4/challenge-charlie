export default function getTemperatures(celsius: number){
    return {celsius, fahrenheit:(celsius * 9) / 5 + 32, kelvin: celsius + 273.15}
}