import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ɵInternalFormsSharedModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-atualizar-cliente',
  imports: [ɵInternalFormsSharedModule, ReactiveFormsModule],
  templateUrl: './form-atualizar-cliente.html',
  styleUrl: './form-atualizar-cliente.scss'
})
export class FormAtualizarCliente {

  // formulario do cliente
  formularioCliente = new FormGroup({
    nome: new FormControl(""),
    id_fiscal: new FormControl(""),
    celular: new FormControl("")
  });

  // botoes do formulário
  @Output() desabilitarEdicao = new EventEmitter<boolean>

  salvar(){
    console.log("Salvou");
    this.desabilitarEdicao.emit();
  }

  cancelar(){
    console.log("Cancelou");
    this.desabilitarEdicao.emit();
  }
}
