import { Component } from '@angular/core';

interface MenuItem {
  texto: string;
  ruta: string;
}

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent {

  public templateMenu: MenuItem[] = [
    {
      texto: "Básicos",
      ruta: "./template/basicos"
    },
    {
      texto: "Dinámicos",
      ruta: "./template/dinamicos"
    },
    {
      texto: "Switches",
      ruta: "./template/switches"
    }
  ];

  public reactiveMenu: MenuItem[] = [
    {
      texto: "Básicos",
      ruta: "./reactive/basicos"
    },
    {
      texto: "Dinámicos",
      ruta: "./reactive/dinamicos"
    },
    {
      texto: "Switches",
      ruta: "./reactive/switches"
    }
  ];

  public authMenu: MenuItem[] = [
    {
      texto: "Registro",
      ruta: "./auth/registro"
    },
    {
      texto: "Login",
      ruta: "./auth/login"
    }
  ]

}
