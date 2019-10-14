import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ClienteModel } from '../models/cliente-model';
import { ClientesDataBaseService } from '../services/clientes-data-base.service';

@Component({
  selector: 'app-lista-cliente',
  templateUrl: './lista-cliente.component.html',
  styleUrls: ['./lista-cliente.component.css']
})
export class ListaClienteComponent implements OnInit {

  listaDeClientes: ClienteModel [] = [];
  @Output() idClicado =  new EventEmitter();

  constructor(private dataBaseService: ClientesDataBaseService) { }

  ngOnInit() {
    this.dataBaseService.enviarCliente.subscribe(clientes => this.listaDeClientes = clientes);
  }

  clienteClicado(item: number) {
    this.idClicado.emit(item);
  }

}
