import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent{
  @Output() nameRequest: EventEmitter<string> = new EventEmitter()
  mostrar(id:string){
    this.nameRequest.emit(id);
  }
}
