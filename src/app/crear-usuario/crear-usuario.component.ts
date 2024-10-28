import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-crear-usuario',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent {
  usuarioForm: FormGroup;
  enviado: boolean = false;

  constructor(private fb: FormBuilder, private usuarioService: UsuarioService) {
    this.usuarioForm = this.fb.group({
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      identificacion: ['', [Validators.required, Validators.pattern('^[0-9]+$'), Validators.maxLength(10)]],
      fechaNacimiento: ['', Validators.required],
      genero: ['', Validators.required],
      pais: ['', Validators.required]
    });
  }

  onSubmit() {
    this.enviado = true;
    if (this.usuarioForm.valid) {
      // Agregar el usuario al servicio
      this.usuarioService.agregarUsuario(this.usuarioForm.value);
      alert('Formulario enviado exitosamente');
      this.usuarioForm.reset();
      this.enviado = false;
    }
  }
}
