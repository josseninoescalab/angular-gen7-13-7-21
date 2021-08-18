import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/_model/usuario';
import { UsuarioService } from 'src/app/_service/usuario.service';

@Component({
  selector: 'app-edit-usuario',
  templateUrl: './edit-usuario.component.html',
  styleUrls: ['./edit-usuario.component.css']
})
export class EditUsuarioComponent implements OnInit {

  idusuario;
  usuario: Usuario;

  constructor(
    private router: ActivatedRoute,
    private usuarioService: UsuarioService
  ) { }

  ngOnInit() {
    console.log(this.router.snapshot.paramMap);
    this.idusuario = this.router.snapshot.paramMap.get('idUsusario');
    this.getUserById(this.idusuario);
  }

  getUserById(idUsario){
    this.usuarioService.getUserById(idUsario).subscribe( (data) => {
      this.usuario = data;
    })
  }

}
