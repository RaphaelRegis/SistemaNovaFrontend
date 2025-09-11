import { Component, input, signal, OnChanges } from '@angular/core';
import { Servico } from '../../models/Servico';
import { ServicosRequest } from '../../services/servicos-request';

@Component({
  selector: 'app-servicos-lista',
  imports: [],
  templateUrl: './servicos-lista.html',
  styleUrl: './servicos-lista.scss'
})
export class ServicosLista {

  constructor(private servicosRequestService: ServicosRequest) {}

  // o id do pedido vem do bloco-pedido
  idPedido = input<number>()
  servicos = signal<Servico[]>([])

  ngOnChanges() {
    this.servicosRequestService.getServicosPedido(this.idPedido())
      .subscribe({
        next: (data) => {
          this.servicos.set(data)
          console.log("Servicos recebidos: " + JSON.stringify(this.servicos()))
        },
        error: (err) => {console.error("Erro ao buscar pedidos!", err)}
      })
  }
}
