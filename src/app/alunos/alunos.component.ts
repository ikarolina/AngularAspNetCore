import { Component, OnInit } from '@angular/core';
import { Aluno } from '../models/Aluno';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  public titulo = 'Alunos';
  public alunoSelecionado!: Aluno; 

 public alunos = [
    {id:1, nome:'Iara', sobrenome:'Karolina', telefone:'1111'},
    {id:2, nome:'Karolina', sobrenome:'Iara', telefone:'2222'},
    {id:3, nome:'Karine', sobrenome:'Sousa', telefone:'3333'},
    {id:4, nome:'Willian', sobrenome:'Cruz', telefone:'4444'},
    {id:5, nome:'Joarez', sobrenome:'Oliveira', telefone:'55555'},
  ];

 AlunoSelect(aluno: Aluno)
 {
   this.alunoSelecionado = aluno;
 }

 Voltar()
 {
  //  this.alunoSelecionado = null;
 }
  constructor() { }

  ngOnInit() {
  }

}
