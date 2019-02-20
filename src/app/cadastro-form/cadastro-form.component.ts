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

    minLength: 3;
    cliente = new Cliente();
    profissoes = ['Programador', 'Empresário', 'Outra'];

    salvar(form: NgForm) {
        form.reset();
    }

}
