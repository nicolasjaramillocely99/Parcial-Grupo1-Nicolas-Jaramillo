import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListaVehiculosComponent} from './lista-vehiculos/lista-vehiculos.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ListaVehiculosComponent],
  exports: [ListaVehiculosComponent]
})
export class VehiculoModule { }
