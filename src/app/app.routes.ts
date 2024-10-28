import { Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { ListaDeUsuariosComponent } from './lista-de-usuarios/lista-de-usuarios.component';
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';

export const routes: Routes = [
  { path: '', component: PrincipalComponent },
  { path: 'lista-usuarios', component: ListaDeUsuariosComponent },
  { path: 'crear-usuario', component: CrearUsuarioComponent },
];
