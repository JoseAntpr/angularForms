import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators, FormArray} from '@angular/forms';
import { Observable } from 'rxjs/Observable';

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
      ]),
      'username': new FormControl('', Validators.required, this.existeUsuario),
      'password1': new FormControl('', Validators.required),
      'password2': new FormControl('')
    })

    this.form.controls['password2'].setValidators([Validators.required, this.noigual.bind(this.form)]);

    this.form.controls['username'].valueChanges.subscribe( data => {
      console.log(data);
    });

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

  noigual( control: FormControl): {[s:string]: boolean}{
    let form: any = this;
    if(control.value !== form.controls['password1'].value){
      return{
        noiguales:true
      }
    }
    return null
  }

  existeUsuario( control: FormControl): Promise<any> | Observable<any>{
    let promesa = new Promise( (resolve, reject) => {
      setTimeout(() => {
        if(control.value === "strider"){
          resolve({ existe:true });
        }else{
          resolve(null);
        }
      }, 3000)
    });
    return promesa;
  }

  guardar(){
    console.log( this.form.value, this.form, this.form.valid);
    this.form.reset({})
  }


}
