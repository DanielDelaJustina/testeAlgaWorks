import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';


class Cliente {
    nome: string;
    email: string;
    profissao = '';
  }

@Component({
  selector: 'app-cadastro-form',
  templateUrl: './cadastro-form.component.html',
  styleUrls: ['./cadastro-form.component.css']
})
export class CadastroFormComponent {

    minLength: number = 3;
    cliente = new Cliente();
    profissoes = ['Programador', 'Empresário', 'Outra'];

    salvar(form: NgForm) {
      // this.cliente.nome = form.value.primeiroNome;
      // this.cliente.email = form.value.emailAddress;
      // this.cliente.profissao = form.value.profissao;

      console.log(form);
      // console.log(this.cliente);
    }

}
