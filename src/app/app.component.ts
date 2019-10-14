import { Component } from '@angular/core';
import { LoginService } from './services/login.service';
import { Router } from '@angular/router';
import { ClientesDataBaseService } from './services/clientes-data-base.service';
import { ClienteModel } from './models/cliente-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  clienteclicado: ClienteModel;

  constructor(private loginService: LoginService, private router: Router, private dataBaseService: ClientesDataBaseService) { }

  // Método utilizado para se deslogar do sistema
  onLogoff(event: MouseEvent) {
    event.preventDefault();
    if (this.loginService.onLogoff()) {
      this.router.navigate(['/login']);
    }
  }

  // Método utilizado para que um determinado item só possa ser acessado se o usuário estiver logado no sistema.
  estaLogado() {
    return this.loginService.estaLogado();
  }

  enviarDetalhe(id): void {
    const clienteclicado = this.dataBaseService.getCliente(id);
  }
}
