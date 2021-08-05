import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Persona {
  nombre: string;
  favoritos: Favorito[];
}

interface Favorito {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {

  @ViewChild("miFormulario") miFormulario!: NgForm;

  public persona: Persona= {
    nombre: "Igor Chinchay",
    favoritos: [
      {
        id: 1,
        nombre: "Assasins Creed"
      },
      {
        id: 2,
        nombre: "Call Of Duty"
      }
    ]
  }

  public nuevoJuegoFavorito: string = "";

  guardar() {
    console.log("Posteado")
  }

  agregarJuego() {
    const juego: Favorito = {
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoJuegoFavorito
    }

    this.persona.favoritos.push({...juego});
    this.nuevoJuegoFavorito = "";
  }

  borrarItemFavorito(index: number) {
    this.persona.favoritos.splice(index, 1);
  }

}
