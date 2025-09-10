import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pedido } from '../models/Pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidosRequest {
  private apiUrl = 'http://localhost:3000/pedidos'

  constructor(private http: HttpClient) {}

  getPedidosEndereco(idEndereco: number | undefined): Observable<Pedido[]> {
    const apiPedidosEndereco = this.apiUrl + "?idEndereco="+idEndereco?.toString();

    return this.http.get<Pedido[]>(apiPedidosEndereco);
  }
}
