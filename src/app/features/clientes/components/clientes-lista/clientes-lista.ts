import { Component } from '@angular/core';

@Component({
  selector: 'app-clientes-lista',
  imports: [],
  templateUrl: './clientes-lista.html',
  styleUrl: './clientes-lista.scss'
})
export class ClientesLista {
  
  // Lista mock para podermos imprimir alguns clientes
  clientes = [
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
  atualizar(id: number) {
    console.log("cliente " + id + " foi atualizado")
  }

  // botao para deletar o cliente
  deletar(id: number) {
    console.log("cliente " + id + " foi deletado")
  }

  
}
