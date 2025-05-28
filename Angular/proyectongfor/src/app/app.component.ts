import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyectongfor';
  sueldos = [1200, 1600, 1150, 800, 2300];
  provincias = [
    {id: 1, nombre:"Huesca"},
    {id: 2, nombre:"Zaragoza"},
    {id: 3, nombre:"Teruel"},
  ]
}
