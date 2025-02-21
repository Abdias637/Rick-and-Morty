import { Component } from '@angular/core';
import { RickyMortyService } from './services/ricky-morty.service';
import { Personaje } from './api.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Api Ricky Morty';

  rickyMorty: Personaje[] = []; // Asegurarse de que rickyMorty es un arreglo de Personaje
  filtrercaracter: Personaje[] = []; // Asegurarse de que filtrercaracter es un arreglo de Personaje
  searchcaracter: string = ''; // Asegurarse de que searchcaracter sea un string
  loading = true;

  constructor(private rickyMortyService: RickyMortyService) {}

  // Aca se obtiene la info de la API y se muestra en la vista html
  ngOnInit() {
    this.loading = true; // Establecer en true antes de cargar los datos
    this.rickyMortyService.getRickyMorty().subscribe({
      next: (data) => {
        this.rickyMorty = <Personaje[]>data.results; // Asegurarse de que los datos sean un arreglo de Personaje
        this.filtrercaracter = data.results;
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        console.log('Info de la API obtenida con éxito');
        this.loading = false; // Establecer en false después de cargar los datos
      }
    });
  }

  // Aca se filtra la info de la API para poder buscarlo en la barra de busqueda y se muestra en la vista html
  search() {
    this.filtrercaracter = this.rickyMorty.filter((personaje) =>
      personaje.name.toLowerCase().includes(this.searchcaracter.toLowerCase())
    );
  }
}