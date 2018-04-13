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
    nombre: "Jose Antonio",
    apellido: "Palacios",
    correo: ""
  }

  ngOnInit() {
  }

  guardar(form: NgForm){
    console.log("Formulario posteado", form, form.value, this.usuario);
  }

}
