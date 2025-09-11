import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Servico } from '../models/Servico';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicosRequest {
  private apiUrl = 'http://localhost:3000/servicos'

  constructor(private http: HttpClient) {}

  getServicosPedido(idPedido: number | undefined): Observable<Servico[]> {
    const apiServicosPedido = this.apiUrl + "?idPedido="+idPedido?.toString()

    return this.http.get<Servico[]>(apiServicosPedido)
  }
}
