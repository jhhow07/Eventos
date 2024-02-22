import { Component, OnInit } from '@angular/core';
import { AbstractControlOptions, FormBuilder, Validators } from '@angular/forms';
import { ValidatorField } from 'src/app/helpers/ValidatorField';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  formOptions: AbstractControlOptions = { validators: ValidatorField.MustMatch('password', 'confirmePassword')};
  form = this.formBuilder.group(
    {
      userName: [''],
      imagemURL: [''],
      titulo: ['NaoInformado', Validators.required],
      primeiroNome: ['', Validators.required],
      ultimoNome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required]],
      descricao: ['', Validators.required],
      funcao: ['NaoInformado', Validators.required],
      password: ['', [Validators.minLength(4), Validators.nullValidator]],
      confirmePassword: ['', Validators.nullValidator],
    },
    this.formOptions
  );

  get f(): any {
    return this.form.controls;
  }

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

  public resetForm(event: any): void {
    event.preventDefault();
    this.form.reset();
  }

}
