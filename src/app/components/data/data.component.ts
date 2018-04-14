import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent {

  form: FormGroup;

  constructor() { 
    this.form = new FormGroup({
      'nombre': new FormControl('Jose', []),
      'apellido': new FormControl(),
      'correo': new FormControl()
    })
  }

  guardar(){
    console.log( this.form.value );
  }


}
