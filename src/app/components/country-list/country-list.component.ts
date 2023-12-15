import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { CountryService } from 'src/app/country.service';
import { countryClass } from 'src/app/models/country';
@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit{
  constructor(private countryService:CountryService){
  }
  countrys:countryClass[]=[]
  ngOnInit() {
    this.traer();
  }
  traer(){
    this.countryService.getAll().subscribe(result=>{
      this.countrys = result
      console.log(this.countrys)
      // lazyloading/paginador algo para no cargar todo de una
    })
  }
}
