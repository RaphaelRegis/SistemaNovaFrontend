import { Component, EventEmitter, inject, Output, resource, signal, OnInit } from '@angular/core';
import { Cliente } from '../../models/Cliente';
import { HttpClient, httpResource } from '@angular/common/http';
import { ClientesRequest } from '../../services/clientes-request';

@Component({
  selector: 'app-clientes-lista',
  imports: [],
  templateUrl: './clientes-lista.html',
  styleUrl: './clientes-lista.scss'
})
export class ClientesLista {

  constructor(private clienteRequestService: ClientesRequest) { }


  clientes = signal<Cliente[]>([])

  ngOnInit() {
    this.clienteRequestService.getAllClientes()
      .subscribe({
        next: (data) => {
          this.clientes.set(data);
          console.log(this.clientes())
        },
        error: (err) => console.error("Erro ao buscar clientes!", err)
      })
  }

  // Lista mock para podermos imprimir alguns clientes
  // clientes: Cliente[] = [
  //   {
  //     id: 1,
  //     nome: "Raphael Regis",
  //     id_fiscal: "123.456.789-12",
  //     Tipo_Pessoa: "CPF",
  //     celular: "1112345-6789"
  //   },
  //   {
  //     id: 2,
  //     nome: "João Pedro",
  //     id_fiscal: "124.456.789-12",
  //     Tipo_Pessoa: "CNPJ",
  //     celular: "1112345-6780"
  //   }
  // ]

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



  // essa parte vai para testarmos as requisicoes




}
