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
  
  public getIdade() {
    return 10;
  }

  public getNome() {
    return this.nome;
  }

  public setNome(nomeInput: any) {
    this.nome = nomeInput + `${'teste'}`;
    this.adicionado = true;
  }
}
