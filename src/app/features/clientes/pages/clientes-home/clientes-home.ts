import { Component } from '@angular/core';
import { ClientesLista } from '../../components/clientes-lista/clientes-lista';
import { ModalCadastroCliente } from '../../components/modal-cadastro-cliente/modal-cadastro-cliente';
import { ClientesBarraDePesquisa } from "../../components/clientes-barra-de-pesquisa/clientes-barra-de-pesquisa";

@Component({
  selector: 'app-clientes-home',
  imports: [ClientesLista, ModalCadastroCliente, ClientesBarraDePesquisa],
  templateUrl: './clientes-home.html',
  styleUrl: './clientes-home.scss'
})
export class ClientesHome {

  valor = false;

  constructor(){
    this.valor = false;
  }

  // Abre o modal para cadastrar clientes
  cadastrarCliente() {
    this.valor = true;
  }

  // Fecha o modal para cadastrar clientes
  fecharCadastroCliente(){
    this.valor = false;
  }
}
