export interface Temp {
    celsius: number;
    fahrenheit: number;
    kelvin: number;
}

export interface Wind {
    speed: number;
    deg: number;
    dir: string;
}

export interface Current {
    name: string;
    country: string;
    icon: string;
    description: string;
    temp: Temp;
    pressure: number;
    humidity: number;
    wind: Wind;
}

export interface Temp2 {
    celsius: number;
    fahrenheit: number;
    kelvin: number;
}

export interface Wind2 {
    speed: number;
    deg: number;
    dir: string;
}

export interface Tomorrow {
    name: string;
    country: string;
    icon: string;
    description: string;
    temp: Temp2;
    pressure: number;
    humidity: number;
    wind: Wind2;
    date: string;
}

export interface Temp3 {
    celsius: number;
    fahrenheit: number;
    kelvin: number;
}

export interface Wind3 {
    speed: number;
    deg: number;
    dir: string;
}

export interface AfterTomorrow {
    name: string;
    country: string;
    icon: string;
    description: string;
    temp: Temp3;
    pressure: number;
    humidity: number;
    wind: Wind3;
    date: string;
}

export interface Data {
    current: Current;
    tomorrow: Tomorrow;
    afterTomorrow: AfterTomorrow;
}

export interface Weather {
    data: Data;
    message: string;
}
