import { Component } from '@angular/core';
import { Pessoa } from '../../models/Pessoa';
import { ActivatedRoute } from '@angular/router';
import { PessoaService } from '../../service/form-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form-view.component.html',
  styleUrl: './form-view.component.css'
})
export class FormViewComponent {
  pessoa?: Pessoa;

  constructor(private route: ActivatedRoute, private pessoaService: PessoaService) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.pessoa = this.pessoaService.obterPessoa(id);
  }
}
