import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {

  public miFormulario: FormGroup = this.fb.group({
    genero: ["M", Validators.required],
    notificaciones: [ true, Validators.requiredTrue],
    terminos: [false, Validators.requiredTrue]
  });

  public persona = {
    genero: "F",
    notificaciones: true
  }

  ngOnInit() {
    this.miFormulario.reset({
      ...this.persona,
      terminos: false
    });

    /* this.miFormulario.get("terminos")?.valueChanges.subscribe(newVal => {
      console.log(newVal);
    }); */

    this.miFormulario.valueChanges.subscribe(({terminos, ...restoDeArray}) => {
      //delete form.terminos;
      this.persona = restoDeArray;
    });
  }

  constructor(private fb: FormBuilder) { }

  guardar() {
    const formValue = {...this.miFormulario.value};
    delete formValue.terminos;

    this.persona = formValue;
    console.log(formValue)
  }

}
