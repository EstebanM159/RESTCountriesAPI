import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CountryService } from 'src/app/country.service';
import { countryClass } from 'src/app/models/country';
@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css']
})
export class CountryDetailComponent implements OnInit{
constructor(private rutaActiva:ActivatedRoute, private countryService:CountryService){}
country:countryClass[]=[];
ngOnInit(){
  this.getCountry((this.rutaActiva.snapshot.params)['name']);
}
getCountry(name:string){
  this.countryService.getByName(name).subscribe(result=>{
      this.country=result;
      console.log(this.country)
  })
}
}
