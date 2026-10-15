import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// 1. Importa tu componente
import { ReporteEstudiantes } from './componentes/reporte-estudiantes/reporte-estudiantes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReporteEstudiantes], 
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'Pc2-AdrianSantisteban';
}