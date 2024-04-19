import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

export interface Persona{
  nombre: string;
  edad:number;
} 
 
@Component({
  selector: 'app-ejercicio4-hijo',
  standalone: true,
  imports: [FormsModule, CommonModule,RouterModule],
  templateUrl: './ejercicio4-hijo.component.html',
  styleUrl: './ejercicio4-hijo.component.css'
})
export class Ejercicio4HijoComponent {
  nombre: string = '';
  edad: number = 0;
@Output() enviarLista = new EventEmitter<Persona>();
 
enviarPersona(){
  let persona: Persona = {
    nombre:this.nombre, edad:this.edad
  };
  this.enviarLista.emit(persona);
  console.log("Persona enviada" + persona.nombre+" "+persona.edad)
}
}