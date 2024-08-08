import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../enviroments/enviroments';
import { NotasDTO } from '../dto/notas.dto';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  constructor(private httpClient: HttpClient) {}

  
  getNotas(): Observable<NotasDTO[]> {
    return this.httpClient.get<NotasDTO[]>(`${environment.apiUrl}/notas`);
  }

  getUnaNota(id: number): Observable<NotasDTO> {
    return this.httpClient.get<NotasDTO>(`${environment.apiUrl}/notas/${id}`);;
  }


  
  crearNota(nota: NotasDTO): Observable<any> {
    return this.httpClient.post<any>(`${environment.apiUrl}/notas`, nota);
  }

 
  editarNota(id: number, nota: NotasDTO): Observable<any> {
    return this.httpClient.put<any>(`${environment.apiUrl}/notas/${id}`, nota);
  }

 
  eliminarNota(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${environment.apiUrl}/notas/${id}`);
  }
}