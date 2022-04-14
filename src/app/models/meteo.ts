export class Meteo {
    temp: string;
    summary: string;
    city: string;

    constructor(temp: string, summary: string, city: string){
        this.temp = temp;
        this.summary = summary;
        this.city = city;
    }
}