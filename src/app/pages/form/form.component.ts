import { Component } from '@angular/core';
import { PessoaService } from '../../service/form-service.service';
import { Pessoa } from '../../models/Pessoa';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  nome: string = '';
  cpf: string = '';
  telefone: string = '';

  constructor(private pessoaService: PessoaService) {}

  adicionarPessoa() {
    const novaPessoa = new Pessoa(this.nome, this.cpf, this.telefone);
    this.pessoaService.adicionarPessoa(novaPessoa);
    alert('Pessoa adicionada com sucesso!');
  }
}
