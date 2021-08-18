import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/_model/usuario';
import { UsuarioService } from 'src/app/_service/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuarios: Usuario[];
  showData: boolean = false;

  constructor(
    private usuarioService: UsuarioService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.findAllUsers();
  }

  findAllUsers(){
    this.usuarioService.findAllUser().subscribe( (data) => {
      this.usuarios = data;
      this.showData = true;
    }, error => {
      console.log(error);
    })
  }

  addUser(){
    this.router.navigate(['/usuarios/add']);
  }

  editUser(user){
    this.router.navigate([`/usuarios/${user.idUsuario}`]);
  }

}
