import { Component, effect, EventEmitter, input, model, output, Output } from '@angular/core';
import { Cliente } from '../../models/Cliente';
import { FormAtualizarCliente } from "../form-atualizar-cliente/form-atualizar-cliente";
import { EnderecosLista } from "../../../enderecos/components/enderecos-lista/enderecos-lista";
import { PedidosLista } from "../../../pedidos/components/pedidos-lista/pedidos-lista";
import { Endereco } from '../../../enderecos/models/Endereco';

@Component({
  selector: 'app-modal-atualizar-cliente',
  imports: [FormAtualizarCliente, EnderecosLista, PedidosLista],
  templateUrl: './modal-atualizar-cliente.html',
  styleUrl: './modal-atualizar-cliente.scss'
})
export class ModalAtualizarCliente {

  constructor(){
    this.editar_cliente = false;
  }

  // o cliente vem de quem vc selecionar no home dos clientes
  cliente = input.required<Cliente>();

  // o endereco vem de quem vc selecionar na lista de enderecos
  endereco = model<Endereco>();

  receberSelecaoEndereco(enderecoRecebido: Endereco) {
    this.endereco.set(enderecoRecebido)
    // console.log("Endereco selecionado: " + JSON.stringify(this.endereco()))
  }


  // Manda evento para fechar o modal
  fecharModalEvento = output()

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
