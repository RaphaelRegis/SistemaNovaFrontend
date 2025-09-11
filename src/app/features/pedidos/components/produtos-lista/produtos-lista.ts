import { Component, input, signal } from '@angular/core';
import { Produto } from '../../models/Produto';
import { ProdutosRequest } from '../../services/produtos-request';

@Component({
  selector: 'app-produtos-lista',
  imports: [],
  templateUrl: './produtos-lista.html',
  styleUrl: './produtos-lista.scss'
})
export class ProdutosLista {

  constructor(private produtosRequestService: ProdutosRequest) { }

  // o id do pedido vem do bloco-pedido
  idPedido = input<number>()

  produtos = signal<Produto[]>([])

  ngOnChanges() {
    this.produtosRequestService.getProdutosPedido(this.idPedido())
      .subscribe({
        next: (data) => {
          this.produtos.set(data)
          console.log("Produtos recebidos: " + JSON.stringify(this.produtos()))
        },
        error: (err) => {console.error("Erro ao buscar pedidos!", err)}
      })
  }

  // produtos: Produto[] = [
  //   {
  //     id: 1,
  //     idProduto: 1,
  //     idTrabalho: 1,
  //     altura: 2.0,
  //     largura: 1.5,
  //     valorBase: 500,
  //     valorTotal: 500
  //   },
  //   {
  //     id: 1,
  //     idProduto: 1,
  //     idTrabalho: 1,
  //     altura: 2.0,
  //     largura: 1.5,
  //     valorBase: 500,
  //     valorTotal: 500
  //   }]
}
