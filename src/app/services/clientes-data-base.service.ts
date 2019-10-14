import { EventEmitter, Injectable } from '@angular/core';
import { ClienteModel } from '../models/cliente-model';



@Injectable({
  providedIn: 'root'
})
export class ClientesDataBaseService {

  meusClientes: ClienteModel [] = [];
  enviarCliente = new EventEmitter();

  constructor() { }

  // Método que irá gravar um novo cliente no array
  setCliente(novoCliente: ClienteModel): void {
    this.meusClientes.push(novoCliente);

    this.enviarCliente.emit(this.meusClientes);
  }

  // Método que irá um número e recuperar os dados do cliente pelo id
  getCliente(id: number): ClienteModel {

    let cliente: ClienteModel;

    cliente = this.meusClientes[id];

    return cliente;
  }
}
