import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { CadastroMoradorComponent } from './pages/cadastro-morador/cadastro-morador.component';
import { CadastroPorteirosComponent } from './pages/cadastro-porteiros/cadastro-porteiros.component';
import { CadastroAvisosComponent } from './pages/cadastro-avisos/cadastro-avisos.component';

const routes: Routes = [ //definição rota componente login
  { path: '', component: LoginComponent}, 
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent},
  { path: 'cadastro-morador', component: CadastroMoradorComponent},
  { path: 'cadastro-porteiros', component: CadastroPorteirosComponent},
  { path: 'cadastro-avisos', component: CadastroAvisosComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
