import {Component, Input} from '@angular/core';

import { EstudianteService } from './estudiante.service';



@Component({
  selector: 'cambio-fiscal',
  templateUrl: './cambio-fiscal.component.html',
  styleUrls: ['./estilos.css', './css/bootstrap.min.css']
})
export class CambioFiscalComponent {
  title = 'CambioFiscal- Vota Uni ULACIT';

  @Input()
  entrante: string;

  @Input()
  saliente: string;

  constructor(private estudianteService: EstudianteService) {}

  fiscales = [
    this.entrante,
    this.saliente
  ];

  jsonres = JSON.stringify(this.fiscales);

  cambiofiscal(): void{
    this.estudianteService.send("cambiofiscal", this.jsonres)
    console.log("entrante: " + this.entrante + ", saliente: " + this.saliente);
  }
}
