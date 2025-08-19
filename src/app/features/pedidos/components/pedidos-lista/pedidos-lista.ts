import { Component } from '@angular/core';
import { Pedido } from '../../models/Pedido';
import { BlocoPedido } from '../bloco-pedido/bloco-pedido';

@Component({
  selector: 'app-pedidos-lista',
  imports: [BlocoPedido],
  templateUrl: './pedidos-lista.html',
  styleUrl: './pedidos-lista.scss'
})
export class PedidosLista {

  pedidos: Pedido[] = [
    {
      id_trabalho: 1,
      estado: "NEGOCIACAO",
      data_inicio: "2099-01-25",
      data_fim: "2099-01-25",
      valor_total: "100",
      id_endereco: 1,
    },
    {
      id_trabalho: 2,
      estado: "NEGOCIACAO",
      data_inicio: "2025-01-25",
      data_fim: "2025-01-25",
      valor_total: "150",
      id_endereco: 2,
    }
  ];

}
