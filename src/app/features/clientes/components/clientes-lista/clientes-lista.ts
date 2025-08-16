import { Component } from '@angular/core';

@Component({
  selector: 'app-clientes-lista',
  imports: [],
  templateUrl: './clientes-lista.html',
  styleUrl: './clientes-lista.scss'
})
export class ClientesLista {
  
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

  atualizar(id: number) {
    console.log("cliente " + id + " foi atualizado")
  }

  deletar(id: number) {
    console.log("cliente " + id + " foi deletado")
  }

  cadastrarCliente() {
    console.log("Cadastrar cliente")
  }
}
