import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cliente } from '../../models/Cliente';
import { FormAtualizarCliente } from "../form-atualizar-cliente/form-atualizar-cliente";

@Component({
  selector: 'app-modal-atualizar-cliente',
  imports: [FormAtualizarCliente],
  templateUrl: './modal-atualizar-cliente.html',
  styleUrl: './modal-atualizar-cliente.scss'
})
export class ModalAtualizarCliente {

  // o cliente vem de quem vc selecionar no home
  @Input() cliente!: Cliente;

  constructor(){
    this.editar_cliente = false;
  }

  // Manda evento para fechar o modal
  @Output() fecharModalEvento = new EventEmitter<Cliente>

  fecharModal(){
    this.fecharModalEvento.emit();
  }

  // Habilita/desabilita edicao do cliente
  editar_cliente: boolean = false;
  
  habilitarEdicao(){
    this.editar_cliente = true;
  }

  desabilitarEdicao(){
    this.editar_cliente = false;
  }


}
