import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CamionesService {
  private API_URL = 'http://localhost:3000/api/camiones';

  constructor(private http: HttpClient) { }

  obtenerCamiones(): Observable<any[]> {
    return this.http.get<any[]>(this.API_URL);
  }

  crearCamion(camion: any): Observable<any> {
    return this.http.post<any>(`${this.API_URL}/crear`, camion);
  }

  actualizarCamion(id: number, camion: any): Observable<any> {
    return this.http.put<any>(`${this.API_URL}/${id}`, camion);
  }

  eliminarCamion(id: number): Observable<any> {
    return this.http.delete<any>(`${this.API_URL}/${id}`);
  }
}
