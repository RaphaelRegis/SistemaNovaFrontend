import { Component } from '@angular/core';
import { Produto } from '../../models/Produto';

@Component({
  selector: 'app-produtos-lista',
  imports: [],
  templateUrl: './produtos-lista.html',
  styleUrl: './produtos-lista.scss'
})
export class ProdutosLista {
  produtos: Produto[] = [
    {
      id: 1,
      idProduto: 1,
      idTrabalho: 1,
      altura: 2.0,
      largura: 1.5,
      valorBase: 500,
      valorTotal: 500
    },
    {
      id: 1,
      idProduto: 1,
      idTrabalho: 1,
      altura: 2.0,
      largura: 1.5,
      valorBase: 500,
      valorTotal: 500
    }]
}
