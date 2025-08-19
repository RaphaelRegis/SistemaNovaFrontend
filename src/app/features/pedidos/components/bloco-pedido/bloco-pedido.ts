import { Component, Input } from '@angular/core';
import { Pedido } from '../../models/Pedido';

@Component({
  selector: 'app-bloco-pedido',
  imports: [],
  templateUrl: './bloco-pedido.html',
  styleUrl: './bloco-pedido.scss'
})
export class BlocoPedido {

  @Input() pedido!: Pedido;
}
