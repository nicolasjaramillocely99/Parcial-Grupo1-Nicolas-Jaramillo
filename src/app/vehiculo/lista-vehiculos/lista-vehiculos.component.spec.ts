/* tslint:disable:no-unused-variable */
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker} from '@faker-js/faker';
import { HttpClientModule } from '@angular/common/http';
import { ListaVehiculosComponent } from './lista-vehiculos.component';
import { VehiculoService } from '../vehiculo.service';
import { Vehiculo } from '../vehiculo';

describe('ListaVehiculosComponent', () => {
  let component: ListaVehiculosComponent;
  let fixture: ComponentFixture<ListaVehiculosComponent>;
  let debug: DebugElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      declarations: [ ListaVehiculosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaVehiculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Prueba de los 3 ejemplos
    it('should render a table with 3 vehicle rows plus header', () => {
      const vehiculos: Vehiculo[] = [];
      for (let i = 0; i < 3; i++) {
        vehiculos.push(
          new Vehiculo(
            faker.number.int(), // id
            faker.vehicle.manufacturer(), // marca
            faker.vehicle.model(), // linea
            faker.vehicle.type(), // referencia
            faker.number.int({ min: 1990, max: 2025 }), // modelo
            faker.number.int({ min: 0, max: 200000 }), // kilometraje
            faker.color.human(), // color
            faker.image.url() // imagen
          )
        );
      }
  
      component.vehiculos = vehiculos;
      fixture.detectChanges();
  
      const tableRows = fixture.nativeElement.querySelectorAll('table tbody tr');
      expect(tableRows.length).toBe(3);
  
      const headerRow = fixture.nativeElement.querySelectorAll('table thead tr');
      expect(headerRow.length).toBe(1);
    });
});
