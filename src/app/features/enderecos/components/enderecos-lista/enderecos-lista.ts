import { Component, signal, OnChanges, Input, Signal, input, output } from '@angular/core';
import { Endereco } from '../../models/Endereco';
import { EnderecosRequest } from '../../services/enderecos-request';

@Component({
  selector: 'app-enderecos-lista',
  imports: [],
  templateUrl: './enderecos-lista.html',
  styleUrl: './enderecos-lista.scss'
})
export class EnderecosLista {

  constructor(private enderecosRequestService: EnderecosRequest) { }

  // requisita os enderecos com base no id do cliente e na inicializacao da lista
  idCliente = input<number>()
  enderecos = signal<Endereco[]>([])

  ngOnChanges() {
    console.log("idCliente" + this.idCliente)
    this.enderecosRequestService.getEnderecosCliente(this.idCliente())
      .subscribe({
        next: (data) => {
          this.enderecos.set(data);
          console.log(this.enderecos())
        },
        error: (err) => console.error("Erro ao buscar os enderecos!", err)

      })
  }

  // funcao para adicionar novo endereco
  cadastrarEndereco() {
    console.log("Novo endereco")
  }


  // funcao para selecionar o endereco
  notificarSelecaoEndereco = output<Endereco>()

  selecionar(endereco: Endereco) {
    // manda um signal para a classe-pai contendo o endereco selecionado
    console.log("Endereco selecionado: " +  JSON.stringify(endereco))

    this.notificarSelecaoEndereco.emit(endereco)
  }

  // funcao para excluir o endereco
  deletar() {
    console.log("O endereco foi excluido")
  }
}
