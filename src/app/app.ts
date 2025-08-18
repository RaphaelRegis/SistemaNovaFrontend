import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClientesHome } from './features/clientes/pages/clientes-home/clientes-home';
import { EnderecosLista } from "./features/enderecos/components/enderecos-lista/enderecos-lista";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ClientesHome, EnderecosLista],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('SistemaNovaFrontend');
}
