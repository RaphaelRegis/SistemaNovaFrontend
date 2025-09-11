import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from '../models/Produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutosRequest {
  private apiUrl = 'http://localhost:3000/produtos'

  constructor(private http: HttpClient) {}

  getProdutosPedido(idPedido: number | undefined): Observable<Produto[]> {
    const apiProdutosPedido = this.apiUrl + "?idPedido="+idPedido?.toString()

    return this.http.get<Produto[]>(apiProdutosPedido)
  }
}
