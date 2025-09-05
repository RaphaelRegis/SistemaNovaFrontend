import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClientesHome } from './features/clientes/pages/clientes-home/clientes-home';
import { EnderecosLista } from "./features/enderecos/components/enderecos-lista/enderecos-lista";
import { ModalAtualizarCliente } from "./features/clientes/components/modal-atualizar-cliente/modal-atualizar-cliente";
import { PedidosLista } from "./features/pedidos/components/pedidos-lista/pedidos-lista";
import { ClientesLista } from "./features/clientes/components/clientes-lista/clientes-lista";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ClientesHome, EnderecosLista, ModalAtualizarCliente, PedidosLista, ClientesLista],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('SistemaNovaFrontend');
}
