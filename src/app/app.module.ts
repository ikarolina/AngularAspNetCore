import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfessoresComponent } from './professores/professores.component';
import { AlunosComponent } from './alunos/alunos.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PerfilComponent } from './perfil/perfil.component';
import { NavComponent } from './nav/nav.component';
import { TituloComponent } from './titulo/titulo.component';

@NgModule({
  declarations: [						
    AppComponent,
      ProfessoresComponent,
      AlunosComponent,
      DashboardComponent,
      PerfilComponent,
      NavComponent,
      TituloComponent
   ],
  imports: [
    BsDropdownModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


