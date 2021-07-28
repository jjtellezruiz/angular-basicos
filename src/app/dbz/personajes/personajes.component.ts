import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from 'src/app/dbz/interfaces/dbz.interfaces'
import { dbzService } from '../service/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {
  get personajes()
  {
    return this.dbzService.personajes;
  }
  constructor(private dbzService: dbzService) { }

  ngOnInit(): void {
  }

}
