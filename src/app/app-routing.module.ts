import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DadosClienteComponent } from './dados-cliente/dados-cliente.component';
import { DetalheClienteComponent } from './detalhe-cliente/detalhe-cliente.component';
import { AuthguardGuard } from './auth/authguard.guard';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dados', component: DadosClienteComponent, canActivate: [AuthguardGuard] },
  { path: 'detalhes', component: DetalheClienteComponent, canActivate: [AuthguardGuard]  },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
