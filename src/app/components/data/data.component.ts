import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent {

  form: FormGroup;
  usuario: Object = {
    nombreCompleto: {
      nombre: "Jose",
      apellido: "Palacios"
    },
    correo: "joseantpalacios@gmail.com"
  }

  constructor() {
    this.form = new FormGroup({
      'nombrecompleto': new FormGroup({
        'nombre': new FormControl('Jose', [Validators.required, ]),
        'apellido': new FormControl('', [Validators.required, ]),
      }),
      'correo': new FormControl('', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$") ])
    })
  }

  guardar(){
    console.log( this.form.value, this.form, this.form.valid);
  }


}
