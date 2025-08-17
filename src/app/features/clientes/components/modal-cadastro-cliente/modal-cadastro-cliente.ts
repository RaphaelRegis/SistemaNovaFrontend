import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-cadastro-cliente',
  imports: [ReactiveFormsModule],
  templateUrl: './modal-cadastro-cliente.html',
  styleUrl: './modal-cadastro-cliente.scss'
})
export class ModalCadastroCliente {

  clienteDTO = {}

  // corpo do formulario
  formularioCliente = new FormGroup({
    nome: new FormControl(''),
    id_fiscal: new FormControl(''),
    celular: new FormControl('')
  })

  // funcao chamada ao fazer submit do formulario
  submit(){
    if(this.formularioCliente.valid) {
      this.clienteDTO = {
        nome: this.formularioCliente.value.nome,
        id_fiscal: this.formularioCliente.value.id_fiscal,
        celular: this.formularioCliente.value.celular

      }
      console.log("Novo cliente: " +JSON.stringify(this.clienteDTO));
      this.closeModal();


    } else {
      console.log("Formulário inválido!")
    }

  }

  // cria um emissor que permite enviar a cliente-home a acao de fechar o modal do cadastro de cliente
  @Output() modalStatus = new EventEmitter<boolean>();

  closeModal(){
    this.modalStatus.emit();
  }
}
