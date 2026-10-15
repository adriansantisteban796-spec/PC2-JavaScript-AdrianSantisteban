import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Estudiante } from '../../modelos/estudiantes';
import { EstudianteService } from '../../services/estudiante';

@Component({
  selector: 'app-reporte-estudiantes',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  styleUrl: './reporte-estudiantes.css',
  templateUrl: './reporte-estudiantes.html'
})
export class ReporteEstudiantes implements OnInit {
  estudiantes: Estudiante[] = [];
  mostrarResultados: boolean = false;

  constructor(private estudianteService: EstudianteService) {}

  ngOnInit(): void {
    this.estudianteService.obtenerEstudiantes().subscribe({
      next: (data: Estudiante[]) => {
        this.estudiantes = data;
      },
      error: (err: any) => {
        console.error('Error al cargar la API:', err);
      }
    });
  }

  generarReporte(): void {
    this.mostrarResultados = true;
  }

  // Recibe las 3 notas del estudiante
  calcularPromedio(n1: number, n2: number, n3: number): number {
    const suma = n1 + n2 + n3;
    return parseFloat((suma / 3).toFixed(2));
  }

  Estados(promedio: number): string {
    if (promedio >= 17) {
      return 'Excelente Alumno';
    } else if (promedio < 13) {
      return 'Desaprobado Alumno';
    } else {
      return 'Regular Alumno';
    }
  }
}