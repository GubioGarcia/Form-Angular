import { cp } from "fs";

export class Pessoa {
  private static idCounter: number = 1;

  public id: number;
  public nome: string;
  public cpf: string;
  public telefone: string;

  constructor(nome: string, cpf: string, telefone: string) {
    this.id = Pessoa.idCounter++;
    this.nome = nome;
    this.cpf = cpf;
    this.telefone = telefone;
  }

  // private validaCpf(cpf: string): boolean {
  //   const tamanhoCpf = /^\d{11}$/;
  //   return tamanhoCpf.test(cpf);
  // }
}
