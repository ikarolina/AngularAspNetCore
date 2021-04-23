import { Component, OnInit } from '@angular/core';
import { Professor } from '../models/professor';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  titulo = 'Professores';
  public professorSelecionado!: Professor;

  public professores = [
     {id:1, nome:'Cassia', disciplina:'Banco de Dados'},
     {id:2, nome:'Marta', disciplina:'Lógica de Programação'},
     {id:3, nome:'Carlos', disciplina:'Programação Orientada a Objeto'},
     {id:4, nome:'Alfredo', disciplina:'Javascript'},
     {id:5, nome:'José', disciplina:'Desenvolvimento Ágil de Software'}
   ];

 ProfessorSelect(professor: Professor)
   {
     this.professorSelecionado = professor;
   }
  
   Voltar()
   {
    //  this.professorSelecionado =  null;
   }
  constructor() { }

  ngOnInit() {
  }

}
