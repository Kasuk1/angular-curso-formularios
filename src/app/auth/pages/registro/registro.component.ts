import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from 'src/app/shared/validators/validators.service';
import { nombreApellidoPattern, emailPattern, noPuedeSerStrider } from '../../../shared/validators/validaciones';
import { EmailValidatorService } from '../../../shared/validators/email-validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html'
})
export class RegistroComponent implements OnInit {

  public miFormulario: FormGroup = this.fb.group({
    nombre: ["", [Validators.required, Validators.pattern(this.validatorsService.nombreApellidoPattern)]],
    email: ["", [Validators.required, Validators.pattern(this.validatorsService.emailPattern)], [this.emailValidator]],
    username: ["", [Validators.required, this.validatorsService.noPuedeSerStrider]],
    password: ["", [Validators.required, Validators.minLength(6)]],
    password2: ["", [Validators.required]],
  },{
    validators: [this.validatorsService.camposIguales("password", "password2")]
  });

  get emailErrorMsg(): string {
    const errors = this.miFormulario.get("email")?.errors;

    if(errors?.required) {
      return "Email es obligatorio";
    } else if(errors?.pattern) {
      return "El valor ingresado no tiene formato de correo electrónico"
    } else if(errors?.emailTomado) {
      return "El email ya fue tomado"
    }

    return "";
  }

  constructor(private fb: FormBuilder, private validatorsService: ValidatorsService, private emailValidator: EmailValidatorService) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: "Igor Chinchay",
      email: "igor2008_11@hotmail.com",
      username: "Kasuk13"
    })
  }

  campoNoValido(campo: string) {
    return this.miFormulario.get(campo)?.invalid && this.miFormulario.get(campo)?.touched;
  }

  

  submitFormulario() {
    console.log(this.miFormulario.value);

    this.miFormulario.markAllAsTouched();
  }

}
