import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { countryClass } from './models/country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  // url='https://restcountries.com/v3.1/all' esta es la original pero por uso la otra por ahora
  url = 'https://restcountries.com/v3.1/all'
    constructor(private http: HttpClient) { }
  getAll(){
   return this.http.get<countryClass[]>(`${this.url}`);
  }
  getByContinent(region:string){
    return this.http.get<countryClass[]>(`https://restcountries.com/v3.1/region/${region}`)
  }
  getByName(q:string){
    return this.http.get<countryClass[]>(`https://restcountries.com/v3.1/name/${q}`)
  }
  
}
