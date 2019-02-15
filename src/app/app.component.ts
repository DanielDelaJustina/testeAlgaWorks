import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TesteAlgaWorks';

  adicionado = false;
  nome = '';
  funcionarios = [];
  ultimoId=0;
  
  public getIdade() {
    return 10;
  }

  public getNome() {
    return this.nome;
  }

  public setNome(nomeInput: any) {
    this.nome = nomeInput;
    this.adicionado = true;
    this.funcionarios.push({
      id: ++this.ultimoId,
      nome: this.nome});
  }
}
