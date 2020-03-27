import { Component } from '@angular/core';
import { UsuariosService } from './services/usuarios.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'interceptorApp';
  constructor(
    public usuariosService: UsuariosService
  ) {
    // se subscribe a la peticion para poder mostrar la respuesta
      this.usuariosService.obtenerUsuarios().subscribe( resp => {
        console.log(resp);
      },
      err => {
        console.log('error en el app component');
        console.log( err );
      });
  }
}
