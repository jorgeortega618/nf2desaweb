import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule], // Asegúrate de incluir CommonModule y ReactiveFormsModule aquí
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  ultimoUsuario: any = null;
  usuarioForm: FormGroup;

  constructor(private usuarioService: UsuarioService, private fb: FormBuilder) {
    // Inicializa el formulario
    this.usuarioForm = this.fb.group({
      nombres: [''],
      apellidos: [''],
      identificacion: [''],
      fechaNacimiento: [''],
      genero: [''],
      pais: ['']
    });
  }

  ngOnInit() {
    // Obtener el último usuario registrado
    this.ultimoUsuario = this.usuarioService.obtenerUltimoUsuario();

    // Si existe un último usuario, carga sus datos en el formulario
    if (this.ultimoUsuario) {
      this.usuarioForm.patchValue(this.ultimoUsuario);
    }
  }
}
