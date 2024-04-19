import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Ejercicio2HijoComponent } from './ejercicio2-hijo/ejercicio2-hijo.component';
import { Ejercicio2PadreComponent } from './ejercicio2-padre/ejercicio2-padre.component';
import { Ejercicio4HijoComponent } from './ejercicio4-hijo/ejercicio4-hijo.component';
import { Ejercicio4PadreComponent } from './ejercicio4-padre/ejercicio4-padre.component';
import { Ejercicio3HijoComponent } from './ejercicio3-hijo/ejercicio3-hijo.component';
import { Ejercicio3PadreComponent } from './ejercicio3-padre/ejercicio3-padre.component';
import { HijoMensajeComponent } from './Hijo-mensaje/hijo-mensaje.component';
import { PadreMensajeComponent } from './Padre-mensaje/padre-mensaje.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Ejercicio4HijoComponent,Ejercicio4PadreComponent,Ejercicio2HijoComponent,Ejercicio2PadreComponent,Ejercicio3HijoComponent,Ejercicio3PadreComponent,HijoMensajeComponent,PadreMensajeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Abril17';
}
