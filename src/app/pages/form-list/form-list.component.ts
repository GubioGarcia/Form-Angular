import { Component } from '@angular/core';
import { Pessoa } from '../../models/Pessoa';
import { PessoaService } from '../../service/form-service.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-list',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './form-list.component.html',
  styleUrl: './form-list.component.css'
})
export class FormListComponent {
  pessoas: Pessoa[];

  constructor(private pessoaService: PessoaService) {
    this.pessoas = this.pessoaService.listarPessoas();
  }
}
