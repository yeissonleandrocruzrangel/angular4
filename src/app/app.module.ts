import * as $ from 'jquery';
import { RouterModule } from '@angular/router';     //Importar Provider


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Componente1Component } from './componente1/componente1.component';
import { ListadoComponent } from './listado/listado.component';
import { FormularioComponent } from './formulario/formulario.component';
import { VerComponent } from './ver/ver.component';
import { ProductoServiceService } from './producto-service.service';

@NgModule({  
  imports: [
    RouterModule.forRoot([
      {path: 'listado', component: ListadoComponent},
      {path: 'formulario', component: FormularioComponent},
      {path: 'detalles/:id/:tipo', component: VerComponent}
      
    ])
  ],
  providers: [ProductoServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
