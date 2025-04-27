import { Component, OnInit } from '@angular/core';
import { VehiculoService } from '../vehiculo.service';
import { Vehiculo } from '../vehiculo'; 

@Component({
  selector: 'app-lista-vehiculos',
  templateUrl: './lista-vehiculos.component.html',
  styleUrls: ['./lista-vehiculos.component.css'],
  standalone: false, 
})
export class ListaVehiculosComponent implements OnInit {

  vehiculos: Array<Vehiculo> = [];
  carrosPorMarca: {[marca: string]: number} = {};

  constructor(private vehiculoService: VehiculoService) { }
  
  getVehiculos(): void{
    this.vehiculoService.getVehiculos().subscribe(vehiculos => {
      this.vehiculos = vehiculos;
      this.carrosPorMarca = {};
      vehiculos.forEach(v => {
        this.carrosPorMarca[v.marca] = (this.carrosPorMarca[v.marca] || 0) + 1;
    });
  })
  }
  ngOnInit() {
    this.getVehiculos();
  }

}
