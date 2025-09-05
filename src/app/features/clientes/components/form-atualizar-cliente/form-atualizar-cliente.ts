import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, ɵInternalFormsSharedModule, ReactiveFormsModule } from '@angular/forms';
import { Cliente } from '../../models/Cliente';

@Component({
  selector: 'app-form-atualizar-cliente',
  imports: [ɵInternalFormsSharedModule, ReactiveFormsModule],
  templateUrl: './form-atualizar-cliente.html',
  styleUrl: './form-atualizar-cliente.scss'
})
export class FormAtualizarCliente implements OnInit {

  @Input() cliente!: Cliente;

  // formulario do cliente
  formularioCliente = new FormGroup({
    nome: new FormControl(""),
    idFiscal: new FormControl(""),
    celular: new FormControl("")
  });

  // usa o input do cliente para colocar os dados atuais no formulario
  ngOnInit(): void {
    this.formularioCliente = new FormGroup({
      nome: new FormControl(this.cliente.nome),
      idFiscal: new FormControl(this.cliente.idFiscal),
      celular: new FormControl(this.cliente.celular)
    })
  }

  // botoes do formulário
  @Output() desabilitarEdicao = new EventEmitter<boolean>

  salvar() {
    console.log("Salvou: " + JSON.stringify(this.cliente));
    this.desabilitarEdicao.emit();
  }

  cancelar() {
    console.log("Cancelou");
    this.desabilitarEdicao.emit();
  }
}
