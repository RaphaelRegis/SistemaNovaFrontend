import { Component } from '@angular/core';
import { ClientesLista } from '../../components/clientes-lista/clientes-lista';
import { ModalCadastroCliente } from '../../components/modal-cadastro-cliente/modal-cadastro-cliente';
import { ClientesBarraDePesquisa } from "../../components/clientes-barra-de-pesquisa/clientes-barra-de-pesquisa";
import { ModalAtualizarCliente } from '../../components/modal-atualizar-cliente/modal-atualizar-cliente';
import { Cliente } from '../../models/Cliente';

@Component({
  selector: 'app-clientes-home',
  imports: [ClientesLista, ModalCadastroCliente, ClientesBarraDePesquisa, ModalAtualizarCliente],
  templateUrl: './clientes-home.html',
  styleUrl: './clientes-home.scss'
})
export class ClientesHome {

  cliente_selecionado: Cliente = {
    id: -1,
    nome: '',
    idFiscal: '',
    tipoPessoa: '',
    celular: '',
    idCliente: 0
  };
  cadastrar_cliente = false;
  atualizar_cliente = false;


  constructor() {
    this.cadastrar_cliente = false;
    this.atualizar_cliente = false;
  }

  // Abre o modal para cadastrar clientes
  cadastrarCliente() {
    this.cadastrar_cliente = true;
  }

  // Fecha o modal para cadastrar clientes
  fecharCadastroCliente() {
    this.cadastrar_cliente = false;
  }

  // Abre modal para atualizar cliente
  atualizarCliente(cliente: Cliente) {
    // console.log("Cliente recebido no home: " + JSON.stringify(cliente));
    this.cliente_selecionado = cliente;
    this.atualizar_cliente = true;
  }


  // Fecha modal para atualizar cliente
  fecharAtualizarCliente() {
    this.atualizar_cliente = false;
  }
}
