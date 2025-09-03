import { Component } from '@angular/core';
import { Servico } from '../../models/Servico';

@Component({
  selector: 'app-servicos-lista',
  imports: [],
  templateUrl: './servicos-lista.html',
  styleUrl: './servicos-lista.scss'
})
export class ServicosLista {
  servicos: Servico[] = [
    {
      id: 0,
      valor: 0,
      descricao: '',
      estado: '',
      id_trabalho: 0
    },
    {
      id: 0,
      valor: 0,
      descricao: '',
      estado: '',
      id_trabalho: 0
    }
  ]
}
