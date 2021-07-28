import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { dbzService } from '../service/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  };

  // @Output() onNuevoPersonaje: EventEmitter<Personaje>= new EventEmitter<Personaje>();
  
  constructor(private dbzService: dbzService) { }

  ngOnInit(): void {
  }

  agregar(): void {   
    if (this.nuevo.nombre.trim().length === 0) { return; }

    console.log(this.nuevo);
    // this.onNuevoPersonaje.emit(this.nuevo);
    this.dbzService.agregarPersonaje(this.nuevo);

    this.nuevo = {
      nombre: '',
      poder: 0
    };

  }
}
