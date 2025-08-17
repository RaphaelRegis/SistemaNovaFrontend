import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClientesHome } from './features/clientes/pages/clientes-home/clientes-home';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ClientesHome],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('SistemaNovaFrontend');
}
