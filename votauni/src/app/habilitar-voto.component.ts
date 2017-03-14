import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Location} from '@angular/common';

import { Estudiante } from './estudiante';
import { Cedula } from './cedula';

import 'rxjs/add/operator/switchMap';


@Component ({
  moduleId: module.id,
  selector: 'habilitar.voto',
  templateUrl: './habilitar-voto.component.html',
  styleUrls: ['./estilos.css', './css/bootstrap.min.css']
})
export class HabilitarVotoComponent {
  estudiante: Estudiante;

  @Input()
  cedula: Cedula;

  search( terms: string): void {
    
  }
}
