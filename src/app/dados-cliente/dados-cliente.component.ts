import { Component, OnInit } from '@angular/core';
import { ClientesDataBaseService } from '../services/clientes-data-base.service';
import { ClienteModel } from '../models/cliente-model';

@Component({
  selector: 'app-dados-cliente',
  templateUrl: './dados-cliente.component.html',
  styleUrls: ['./dados-cliente.component.css']
})
export class DadosClienteComponent implements OnInit {

  enviado = false;

  // tslint:disable-next-line: variable-name
  _nome: string;
  // tslint:disable-next-line: variable-name
  _email: string;
  // tslint:disable-next-line: variable-name
  _limiteCredito: number;
  // tslint:disable-next-line: variable-name
  _situacao: string;
  // tslint:disable-next-line: variable-name
  _tipo: string;

  tipos: string [] = ['Particular', 'Trabalho', 'Amigos', 'Família', 'Indicação'];

  constructor(private dataBaseService: ClientesDataBaseService) { }

  ngOnInit() {
  }

  enviarDados() {
    if (this._tipo === undefined) {
      this._tipo = this.tipos[0];
    }

    const novoCliente = new ClienteModel(this._nome, this._email, this._limiteCredito, this._situacao, this._tipo);

    this.dataBaseService.setCliente(novoCliente);

    this.enviado = ! this.enviado;
  }

  voltar() {
    this._nome = '';
    this._email = '';
    this._situacao = '';
    this._tipo = '';
    this.enviado = ! this.enviado;
  }
}



