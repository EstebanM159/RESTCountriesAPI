import { Component, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { OnInit } from '@angular/core';
import { CountryService } from 'src/app/country.service';
import { countryClass } from 'src/app/models/country';
@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit, OnChanges{
  constructor(private countryService:CountryService){
  }
  @Input() continente!: string;
  @Input() paisBuscado!: string;
  public data$: any;
  countrys:countryClass[]=[]
  ngOnInit() {
    this.traer();
  }
  ngOnChanges(changes: SimpleChanges): void {
    // Aca filtro por pais
    if(changes['paisBuscado'] && changes['paisBuscado'].currentValue !== undefined && changes['paisBuscado'].currentValue !== "" && changes['paisBuscado'].currentValue.length>=4){
      this.countryService.getByName(changes['paisBuscado'].currentValue).subscribe(
        result=>{
          this.countrys = result
        }
      );
    }
    // Aca filtro por continente
    if(changes['continente'] && changes['continente'].currentValue !== undefined && changes['continente'].currentValue !== ""){
      this.countryService.getByContinent(changes['continente'].currentValue).subscribe(result=>{
        this.countrys = result
      })
    }
    
  }
  
  traer(){
    this.countryService.getAll().subscribe(result=>{
      this.countrys = result
      // lazyloading/paginador algo para no cargar todo de una
    })
  }
}
