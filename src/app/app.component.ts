import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Ejercicio2HijoComponent } from './ejercicio2-hijo/ejercicio2-hijo.component';
import { Ejercicio2PadreComponent } from './ejercicio2-padre/ejercicio2-padre.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Ejercicio2HijoComponent,Ejercicio2PadreComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Abril17';
}
