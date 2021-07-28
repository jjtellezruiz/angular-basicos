import { Injectable } from "@angular/core";
import { Personaje } from 'src/app/dbz/interfaces/dbz.interfaces';

@Injectable()
export class dbzService {

    private _personajes: Personaje[] = [
        {
          nombre: 'Goku',
          poder: 15000
        },
        {
          nombre: 'Vegeta',
          poder: 7500
        }
      ]

    get personajes(): Personaje[] {
      // ... es el operador spread: separa cada uno de los elementos que tiene este arreglo y crea uno nuevo
      // por tanto, la referencia con _personajes no se modifica
      // si llego a devoler this._personajes, podría cambiarlo.
      return [...this._personajes];
    }
      
    constructor(){ }

    agregarPersonaje(personaje: Personaje) {
      this._personajes.push(personaje);
    }

}

