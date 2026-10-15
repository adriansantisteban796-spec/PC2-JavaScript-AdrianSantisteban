import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Estudiante } from '../modelos/estudiantes';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {
    
  private Url = 'https://careli2021.github.io/api_examen/api/estudiante.json';

  constructor(private http: HttpClient) {}

  obtenerEstudiantes(): Observable<Estudiante[]> {
    return this.http.get<Estudiante[]>(this.Url);
  }
}
