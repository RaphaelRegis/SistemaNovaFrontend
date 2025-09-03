import { Component, Input } from '@angular/core';
import { Pedido } from '../../models/Pedido';
import { ProdutosLista } from "../produtos-lista/produtos-lista";
import { ServicosLista } from "../servicos-lista/servicos-lista";

@Component({
  selector: 'app-bloco-pedido',
  imports: [ProdutosLista, ServicosLista],
  templateUrl: './bloco-pedido.html',
  styleUrl: './bloco-pedido.scss'
})
export class BlocoPedido {

  @Input() pedido!: Pedido;
}
