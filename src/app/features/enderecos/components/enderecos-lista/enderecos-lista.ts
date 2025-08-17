import { Component } from '@angular/core';
import { Endereco } from '../../models/Endereco';

@Component({
  selector: 'app-enderecos-lista',
  imports: [],
  templateUrl: './enderecos-lista.html',
  styleUrl: './enderecos-lista.scss'
})
export class EnderecosLista {

  // mock dos enderecos
  enderecos: Endereco[] = [
    {
      id: 1,
      cidade: "Boa Nova",
      logradouro: "Rua A",
      numero: "3",
      divida: "10",
      id_cliente: 1
    },
    {
      id: 2,
      cidade: "Boa Nova",
      logradouro: "Rua B",
      numero: "2",
      divida: "15",
      id_cliente: 1
    }
  ]

  // funcao para adicionar novo endereco
  cadastrarEndereco(){
    console.log("Novo endereco")
  }


  // funcao para selecionar o endereco
  selecionar() {
    console.log("Ao selecionar, o endereco deve ir pra parte dos Pedidos")
  }

  // funcao para excluir o endereco
  deletar() {
    console.log("O endereco foi excluido")
  }
}
