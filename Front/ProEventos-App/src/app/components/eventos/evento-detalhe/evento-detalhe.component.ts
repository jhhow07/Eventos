import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-evento-detalhe',
  templateUrl: './evento-detalhe.component.html',
  styleUrls: ['./evento-detalhe.component.css']
})
export class EventoDetalheComponent implements OnInit {
  form = this.formBuilder.group({
    tema: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
    local: ['', Validators.required],
    dataEvento: ['', Validators.required],
    qtdPessoas: ['', [Validators.required, Validators.max(120000)]],
    telefone: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    imagemURL: ['', Validators.required]
  });

  get f(): any {
    return this.form.controls;
  }

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

  resetForm(): void {
    this.form.reset();
  }

}
