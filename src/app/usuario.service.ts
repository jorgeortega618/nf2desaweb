import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private usuarios: Array<{ nombres: string; apellidos: string; identificacion: string; fechaNacimiento: string; genero: string; pais: string }> = [];

  // Método para agregar un usuario
  agregarUsuario(usuario: { nombres: string; apellidos: string; identificacion: string; fechaNacimiento: string; genero: string; pais: string }) {
    this.usuarios.push(usuario);
  }

  // Método para obtener la lista de usuarios
  obtenerUsuarios() {
    return this.usuarios;
  }
  
  // Método para obtener el último usuario registrado
  obtenerUltimoUsuario() {
    return this.usuarios.length > 0 ? this.usuarios[this.usuarios.length - 1] : null;
  }
}
