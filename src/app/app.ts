import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClientesLista } from "./features/clientes/components/clientes-lista/clientes-lista";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ClientesLista],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('SistemaNovaFrontend');
}
