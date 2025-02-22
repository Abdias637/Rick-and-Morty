import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Si estás usando HttpClient para llamar a la API

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  filtrercaracter: any[] = [];  // Define la propiedad 'filtrercaracter'

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // Llama a la API para obtener los personajes (esto es solo un ejemplo)
    this.http.get<any>('https://rickandmortyapi.com/api/character')
      .subscribe(data => {
        this.filtrercaracter = data.results;  // Asigna los resultados a 'filtrercaracter'
      });
  }
}
