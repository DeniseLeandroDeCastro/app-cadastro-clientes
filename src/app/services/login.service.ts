import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  // Método para o usuário se autenticar no sistema.
  onLogin(usuario: string, senha: string): boolean {
    if (usuario === 'denise@email.com.br' && senha === '12345678') {
      sessionStorage.setItem('autenticado', 'sim');
      return true;
    } else {
      return false;
    }
  }

  // Método para se deslogar do sistema.
  onLogoff() {
    sessionStorage.clear();
    return true;
  }

  // Método utilizado p/permitir a visualização de algum item, caso o usuário esteja logado.
  estaLogado() {
    if (sessionStorage.getItem('autenticado')) {
      return true;
    } else {
      return false;
    }
  }
}
