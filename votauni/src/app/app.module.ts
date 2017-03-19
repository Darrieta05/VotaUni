import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { HttpModule }     from '@angular/http';

import { AppComponent }   from './app.component';
import { AppRoutingModule }     from './app-routing.module';
import { CambioFiscalComponent} from './cambio-fiscal.component';
import { HabilitarVotoComponent } from './habilitar-voto.component';
import { IndexFiscalComponent } from './index-fiscal.component';
import { TerminalPartidosComponent } from './terminal-partidos.component';
import { VotoCedulaComponent } from './voto-cedula.component';
import { EstudianteService } from './estudiante.service';

@NgModule({
  declarations: [
    AppComponent,
    CambioFiscalComponent,
    HabilitarVotoComponent,
    IndexFiscalComponent,
    TerminalPartidosComponent,
    VotoCedulaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ EstudianteService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
