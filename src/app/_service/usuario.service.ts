import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { Subject } from 'rxjs’;
import { environment } from 'src/environments/environment';
import { Usuario } from '../_model/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url: string

  constructor(
    private http: HttpClient
  ) { }

  findAllUser(){
    this.url = `${environment.HOST}/usuarios`;
    return this.http.get<Usuario[]>(this.url);
  }

  getUserById(idUsuario){
    this.url = `${environment.HOST}/usuarios/${idUsuario}`;
    return this.http.get<Usuario>(this.url);
  }
}
