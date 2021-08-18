import { Rol } from "./rol";

export class Usuario {
    idUsuario: number;
    nombreUsuario: string;
    password: string;
    status: string;
    roles: Rol[];    
}