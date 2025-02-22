import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements AfterViewInit {
  contactos = [
    { nombre: 'Juan Pérez', email: 'juan.perez@example.com' },
    { nombre: 'Ana Gómez', email: 'ana.gomez@example.com' },
    { nombre: 'Luis Sánchez', email: 'luis.sanchez@example.com' },
    { nombre: 'Carlos Martínez', email: 'carlos.martinez@example.com' },
    { nombre: 'Laura Rodríguez', email: 'laura.rodriguez@example.com' },
    { nombre: 'Pedro Fernández', email: 'pedro.fernandez@example.com' },
    { nombre: 'Marta López', email: 'marta.lopez@example.com' },
    { nombre: 'José González', email: 'jose.gonzalez@example.com' },
    { nombre: 'Sofía Pérez', email: 'sofia.perez@example.com' },
    { nombre: 'Carlos Díaz', email: 'carlos.diaz@example.com' }
  ];

  filtro: string = '';

  ngAfterViewInit(): void {
    this.mostrarContactos();
  }

  mostrarContactos(): void {
    const lista = document.getElementById('lista-contactos');
    if (lista) {
      lista.innerHTML = ''; // Limpiar lista antes de actualizar

      this.contactos.forEach(contacto => {
        if (this.filtro === '' || contacto.nombre.toLowerCase().includes(this.filtro.toLowerCase()) || contacto.email.toLowerCase().includes(this.filtro.toLowerCase())) {
          const li = document.createElement('li');
          li.className = 'list-group-item';
          li.innerHTML = `<strong>${contacto.nombre}</strong> - ${contacto.email}`;
          lista.appendChild(li);
        }
      });
    }
  }

  actualizarFiltro(event: Event): void {
    this.filtro = (event.target as HTMLInputElement).value;
    this.mostrarContactos();
  }
}
