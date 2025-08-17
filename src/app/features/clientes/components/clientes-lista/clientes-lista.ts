import { Component, EventEmitter, Output } from '@angular/core';
import { Cliente } from '../../models/Cliente';

@Component({
  selector: 'app-clientes-lista',
  imports: [],
  templateUrl: './clientes-lista.html',
  styleUrl: './clientes-lista.scss'
})
export class ClientesLista {
  
  // Lista mock para podermos imprimir alguns clientes
  clientes: Cliente[] = [
    {
      id: 1,
      nome: "Raphael Regis",
      id_fiscal: "123.456.789-12",
      Tipo_Pessoa: "CPF",
      celular: "1112345-6789"
    },
    {
      id: 2,
      nome: "João Pedro",
      id_fiscal: "124.456.789-12",
      Tipo_Pessoa: "CNPJ",
      celular: "1112345-6780"
    }
  ]

  // botao para atualizar o cliente
  @Output() atualizarCliente = new EventEmitter<Cliente>;
  atualizar(cliente: Cliente) {
    //console.log("cliente " + JSON.stringify(cliente) + " foi atualizado")
    this.atualizarCliente.emit(cliente);
  }

  // botao para deletar o cliente
  deletar(id: number) {
    console.log("cliente " + id + " foi deletado")
  }

  
}
