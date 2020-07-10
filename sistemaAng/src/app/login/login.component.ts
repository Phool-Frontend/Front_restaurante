import { Component, OnInit } from '@angular/core';
import { SistemaService } from '../sistema.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario:string
  clave:string
  
  constructor(public api:SistemaService, private router:Router) { }

  ngOnInit() {
  }

  iniciarSesion(){
    this.api.login(this.usuario, this.clave).subscribe(
      data=> {
        console.log(data)
        this.guardarToken(data)
        
        this.api.estado=true
        this.router.navigate(['home'])
      },
      error=>console.log(error)
    )
  }

  guardarToken(token){
    localStorage.setItem("token",JSON.stringify(token))
  }

}
