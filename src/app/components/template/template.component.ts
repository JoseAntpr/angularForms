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
    correo: null
  }

  ngOnInit() {
  }

  guardar(form: NgForm){
    console.log("Formulario posteado", form, form.value, this.usuario);
  }

}
