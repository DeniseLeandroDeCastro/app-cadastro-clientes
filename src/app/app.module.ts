import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DadosClienteComponent } from './dados-cliente/dados-cliente.component';
import { ListaClienteComponent } from './lista-cliente/lista-cliente.component';
import { DetalheClienteComponent } from './detalhe-cliente/detalhe-cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DadosClienteComponent,
    ListaClienteComponent,
    DetalheClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
