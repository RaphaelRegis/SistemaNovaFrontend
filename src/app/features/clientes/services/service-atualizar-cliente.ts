import { Injectable } from '@angular/core';
import { Cliente } from '../models/Cliente';
import { FormGroup, FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ServiceAtualizarCliente {
  
    clienteExemplo: Cliente = {
      id: 1,
      nome: "Raphael Regis",
      idFiscal: "123.456.789-12",
      tipoPessoa: "CPF",
      celular: "1112345-6789",
      idCliente: 0
    }

  editavel_cliente: boolean = false;

  formularioCliente = new FormGroup({
    nome: new FormControl(this.clienteExemplo.nome),
    idFiscal: new FormControl(this.clienteExemplo.idFiscal),
    celular: new FormControl(this.clienteExemplo.celular)
  })

  salvar() {
    if (this.formularioCliente.valid) {
      console.log("Cliente salvo: " + JSON.stringify(this.formularioCliente.value))
      this.atualizarClienteExemplo()
      this.editavel_cliente = false;
    }
  }

  private atualizarClienteExemplo() {
    this.clienteExemplo.nome = this.formularioCliente.value.nome ? this.formularioCliente.value.nome : "";
    this.clienteExemplo.idFiscal = this.formularioCliente.value.idFiscal ? this.formularioCliente.value.idFiscal : "";
    this.clienteExemplo.celular = this.formularioCliente.value.celular ? this.formularioCliente.value.celular : "";
  }


  cancelar() {
    this.editavel_cliente = false;
  }

  editar() {
    this.formularioCliente = new FormGroup({
      nome: new FormControl(this.clienteExemplo.nome),
      idFiscal: new FormControl(this.clienteExemplo.idFiscal),
      celular: new FormControl(this.clienteExemplo.celular)
    })
    this.editavel_cliente = true;
  }

}
