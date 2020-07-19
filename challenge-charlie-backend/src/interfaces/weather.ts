export default interface Weather {
    name: string;
    country: string;
    icon: string;
    description: string;
    temp: { celsius: number; fahrenheit: number; kelvin: number };
    pressure: number;
    humidity: number;
    wind: { speed: number; deg: number; dir: string };
}
