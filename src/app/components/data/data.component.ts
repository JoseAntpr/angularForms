import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators, FormArray} from '@angular/forms';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent {

  form: FormGroup;
  usuario: any = {
    nombrecompleto: {
      nombre: "Jose",
      apellido: "Palacios"
    },
    correo: "joseantpalacios@gmail.com",
    pasatiempos: ['Correr', 'Dormir', "Comer"]
  }

  constructor() {
    this.form = new FormGroup({
      'nombrecompleto': new FormGroup({
        'nombre': new FormControl('', [Validators.required, ]),
        'apellido': new FormControl('', [Validators.required, this.noPalacios ]),
      }),
      'correo': new FormControl('', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$") ]),
      'pasatiempos': new FormArray([ 
        new FormControl('Correr', Validators.required)
      ])
    })

    //this.form.setValue( this.usuario );
  }

  agregarPasatiempo(){
    (<FormArray> this.form.controls['pasatiempos']).push(
      new FormControl('', Validators.required)
    )
  }

  noPalacios( control: FormControl): {[s:string]: boolean}{
    if(control.value === "palacios"){
      return{
        nopalacios:true
      }
    }
    return null
  }

  guardar(){
    console.log( this.form.value, this.form, this.form.valid);
    this.form.reset({})
  }


}
