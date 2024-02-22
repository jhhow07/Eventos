import { Component, OnInit } from '@angular/core';
import { AbstractControlOptions, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorField } from 'src/app/helpers/ValidatorField';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  formOptions: AbstractControlOptions = {
    validators: ValidatorField.MustMatch('senha', 'confirmarSenha')
  }
  form: FormGroup = this.formBuilder.group({
    primeiroNome: ['', Validators.required],
    ultimoNome: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    userName: ['', Validators.required],
    senha: ['', [Validators.required, Validators.minLength(6)]],
    confirmarSenha: ['', [Validators.required, Validators.minLength(6)]]
  }, this.formOptions);

  get f(): any {
    return this.form.controls;
  }

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

}
