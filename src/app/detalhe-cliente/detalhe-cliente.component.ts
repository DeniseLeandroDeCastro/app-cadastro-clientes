import { Component, Input} from '@angular/core';
import { ClienteModel } from '../models/cliente-model';



@Component({
  selector: 'app-detalhe-cliente',
  templateUrl: './detalhe-cliente.component.html',
  styleUrls: ['./detalhe-cliente.component.css']
})
export class DetalheClienteComponent {


  constructor() {}

  @Input() cliente: ClienteModel;

}
