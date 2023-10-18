import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http' 
import { Observable } from 'rxjs';
import { LisPacientes } from '../interfaces/Listado.interfaces';
@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  private URL:string= 'https://localhost:7073/api/Pacientes';
  constructor(private Http: HttpClient) {}

  getAll():Observable<LisPacientes[]>{
    return this.Http.get<LisPacientes[]>(this.URL);
  }

  delete(id:number):Observable<LisPacientes>{
    return this.Http.delete<LisPacientes>(this.URL+'/'+id)
  }

  create(agreg:LisPacientes):Observable<LisPacientes>{
    return  this.Http.post<LisPacientes>(this.URL, agreg)
  }

  get(id:number):Observable<LisPacientes>{
    return this.Http.get<LisPacientes>(this.URL+'/'+id)
  }

  update(actualiz:LisPacientes):Observable<LisPacientes>{
    return this.Http.put<LisPacientes>(this.URL, actualiz)
  }

}

