import { Component, EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  @Output() searchValue: EventEmitter<string> = new EventEmitter()
  src : string="";
  search(value:string){
    this.searchValue.emit(value);
  }
  // repo de ejemplo https://github.com/leifermendez/angular-buscador/blob/main/src/app/app.component.ts
}
