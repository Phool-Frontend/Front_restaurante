import { Component, OnInit } from '@angular/core';
import { SistemaService } from '../sistema.service';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent implements OnInit {

  nombre:string
  correo:string
  clave:string

  constructor(public api:SistemaService) { }

  ngOnInit() {
  }

  registrar(){
    this.api.nuevoUsuario(this.nombre, this.correo, this.clave).subscribe(data=>{
      console.log(data);
    });
  }

}
