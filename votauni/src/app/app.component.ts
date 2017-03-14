import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  template: `
    <router-outlet></router-outlet>
    `,
  selector: 'app-root',
  styleUrls: ['./estilos.css', './css/bootstrap.min.css']
})
export class AppComponent {
  title = 'Vota Uni ULACIT';

}
