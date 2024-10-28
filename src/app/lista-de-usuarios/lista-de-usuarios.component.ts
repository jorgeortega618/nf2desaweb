import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-de-usuarios',
  standalone: true,
  imports: [CommonModule], // Agrega CommonModule aquí
  templateUrl: './lista-de-usuarios.component.html',
  styleUrls: ['./lista-de-usuarios.component.css']
})
export class ListaDeUsuariosComponent implements OnInit {
  usuarios: Array<{ nombres: string; apellidos: string; identificacion: string; fechaNacimiento: string; genero: string; pais: string }> = [];

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit() {
    // Obtener la lista de usuarios del servicio
    this.usuarios = this.usuarioService.obtenerUsuarios();
  }
}