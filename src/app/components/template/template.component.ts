import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: []
})
export class TemplateComponent {

  constructor() { }
  usuario: Object = {
    nombre: null,
    apellido: null,
    correo: null,
    pais: "",
    sexo: "Hombre",
    acepta: true
  }

  paises = [{
    codigo: "CRI",
    nombre: "Costa Rica"
  },
  {
    codigo: "ES",
    nombre: "España"
  }]

  sexos = ["Hombre", "Mujer"]

  ngOnInit() {
  }

  guardar(form: NgForm){
    console.log("Formulario posteado", form);
  }

}
