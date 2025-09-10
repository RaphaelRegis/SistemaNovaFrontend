import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Endereco } from '../models/Endereco';

@Injectable({
  providedIn: 'root'
})
export class EnderecosRequest {
  private apiUrl = 'http://localhost:3000/enderecos'

  constructor(private http: HttpClient) {}

  getEnderecosCliente(idCliente: number | undefined): Observable<Endereco[]>{
    const apiEnderecosCliente = 
    this.apiUrl+"?idCliente="+idCliente?.toString()

    return this.http.get<Endereco[]>(apiEnderecosCliente)
  }
}
