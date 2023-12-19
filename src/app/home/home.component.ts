import { Component } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  nameContinente:string ="";
  namePais:string ="";
  asignarHome(e: string){
    this.nameContinente = e;
  }
  mostrar(value:any){
    this.namePais = value
  }
}
