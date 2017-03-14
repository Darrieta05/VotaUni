import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CambioFiscalComponent} from './cambio-fiscal.component';
import { HabilitarVotoComponent } from './habilitar-voto.component';
import { IndexFiscalComponent } from './index-fiscal.component';
import { TerminalPartidosComponent } from './terminal-partidos.component';
import { VotoCedulaComponent } from './voto-cedula.component';

const routes: Routes = [
  { path: '', redirectTo: '/index-fiscal', pathMatch: 'full' },
  { path: 'cambio-fiscal',  component: CambioFiscalComponent },
  { path: 'terminal-partidos', component: TerminalPartidosComponent },
  { path: 'voto-cedula',     component: VotoCedulaComponent },
  { path: 'index-fiscal',     component: IndexFiscalComponent },
  { path: 'habilitar-voto',     component: HabilitarVotoComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
