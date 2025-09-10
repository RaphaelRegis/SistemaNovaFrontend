import { Component, input, OnChanges, signal } from '@angular/core';
import { Pedido } from '../../models/Pedido';
import { BlocoPedido } from '../bloco-pedido/bloco-pedido';
import { PedidosRequest } from '../../services/pedidos-request';

@Component({
  selector: 'app-pedidos-lista',
  imports: [BlocoPedido],
  templateUrl: './pedidos-lista.html',
  styleUrl: './pedidos-lista.scss'
})
export class PedidosLista {

  constructor(private pedidosRequestService: PedidosRequest) { }

  // requisita os pedidos com base no endereco selecionado
  idEndereco = input<number | undefined>()
  pedidos = signal<Pedido[]>([])

  ngOnChanges() {
    // console.log("ID do endereco: " + this.idEndereco)

    if (this.idEndereco !== null) {
      
      this.pedidosRequestService.getPedidosEndereco(this.idEndereco())
      .subscribe({
        next: (data) => {
          // console.log("Pedidos recebidos: " + JSON.stringify(data))
          this.pedidos.set(data)
        },
        error: (err) => console.error("Erro ao buscar pedidos!", err)
      })
    }

  }

}
