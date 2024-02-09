import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryDetailComponent } from './components/country-detail/country-detail.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{
      path:'',
      redirectTo:'home',
      pathMatch:'full'
    },
    {
      path:'home',
      component :HomeComponent
    },
    {
      path:'country-detail/:name',
      component:CountryDetailComponent
    },
    {
      path:'country-detail',
      component:CountryDetailComponent
    }
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 
 }
// const routes: Routes = [
//   {
//     path:'',
//     redirectTo:'productos',
//     pathMatch:'full'
//   },
//   {
//     path:'productos',
//     component:ProductosComponent
//   },
//   {
//     path:'sobrenosotros',
//     component:SobrenosotrosComponent
//   },
//   {
//     path:'mostrar-producto/:id',
//     component:MostrarProductoComponent
//   },
//   {
//     path:'mostrar-producto',
//     component:MostrarProductoComponent
//   },{
//     path:'contacto',
//     component:ContactoComponent
//   }
// ];