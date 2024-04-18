import { Component, EventEmitter,Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ejercicio2-hijo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ejercicio2-hijo.component.html',
  styleUrl: './ejercicio2-hijo.component.css'
})
export class Ejercicio2HijoComponent {
  @Output()
  productoSeleccionado: EventEmitter<string> = new EventEmitter<string>();

  seleccionarProducto(producto: string): void {
    this.productoSeleccionado.emit(producto);
  }

}
