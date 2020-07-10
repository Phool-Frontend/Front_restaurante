import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SistemaService implements OnInit {

  estado:boolean

  private urlapi
  = 'http://localhost:8000/';

  constructor(

    private httpClient:HttpClient
    
    ) {}

  ngOnInit() {}
//********************************* LOGIN Y REGISTER *******************************
nuevoUsuario(nombre,correo,clave){
  return this.httpClient.post(this.urlapi+'api/auth/registrar',{
    name: nombre,
    email: correo,
    password: clave
});}

login(correo,clave){
  return this.httpClient.post(this.urlapi+'api/auth/login',{
    email: correo,
    password: clave
});}
//*********************************************************************************
////////////////////////// CATEGORIA //////////////////////////
  getCategoria(){

    return this.httpClient.get(this.urlapi+'categorias/listar');
  }

  nuevaCategoria(minombre,micondicion){
    return this.httpClient.post(this.urlapi+'categorias/guardar',{
      nombre: minombre,
      condicion: micondicion
  });}

  
deleteData(id){
  return this.httpClient.delete('http://127.0.0.1:8000/categorias/eliminar/'+id);
  }
  
editarEstado(nombre ,id){
return this.httpClient.put(this.urlapi+'categorias/actualizar/',{
  nombre:nombre,
  id:id
});
}

desactivarEstado(miid){
return this.httpClient.get(this.urlapi+'categorias/desactivar/'+miid,{
});
}

activarEstado(miid){
return this.httpClient.get(this.urlapi+'categorias/activar/'+miid,{
});
}

/////////////////////////// ARTICULO /////////////////////////

getArticulo(){
  return this.httpClient.get(this.urlapi+'articulos/listar');
  }
  
nuevaArticulo(minombre,miprecio,micondicion,miidcategoria){
    return this.httpClient.post(this.urlapi+'articulos/guardar',{
      nombre: minombre,
      precio: miprecio,
      condicion:micondicion,
      idcategoria:miidcategoria
});}
  
deleteData2(id){
      return this.httpClient.delete('http://127.0.0.1:8000/articulos/eliminar/'+id);
      }
      
editarEstado2(idcategoria,precio,nombre,id){
  return this.httpClient.put(this.urlapi+'articulos/actualizar/',{
  id:id,
  nombre:nombre,
  precio:precio,
  idcategoria:idcategoria
  });}
////////////////////////// Plato //////////////////////////
getPlato(){

  return this.httpClient.get(this.urlapi+'plato/listar');
}

nuevaPlato(minombre,miprecio,mitipo,micantidad){
  return this.httpClient.post(this.urlapi+'plato/guardar',{
    nombre: minombre,
    precio:miprecio,
    tipo:mitipo,
    cantidad:micantidad
});}


deleteData3(id){
return this.httpClient.delete('http://127.0.0.1:8000/plato/eliminar/'+id);
}

editarEstado3(cantidad,tipo,precio,nombre ,id){
return this.httpClient.put(this.urlapi+'plato/actualizar/',{
cantidad:cantidad,
tipo:tipo,
precio:precio,
nombre:nombre,
id:id
});
}
////////////////////////// MESA //////////////////////////
getMesa(){

  return this.httpClient.get(this.urlapi+'mesa/listar');
}

nuevaMesa(miobservaciones,micondicion){
  return this.httpClient.post(this.urlapi+'mesa/guardar',{
    observaciones: miobservaciones,
    condicion: micondicion
});}


deleteData4(id){
return this.httpClient.delete('http://127.0.0.1:8000/mesa/eliminar/'+id);
}

editarEstado4(observaciones ,id){
return this.httpClient.put(this.urlapi+'mesa/actualizar/',{
observaciones:observaciones,
id:id
});
}

desactivarEstado2(miid){
return this.httpClient.get(this.urlapi+'mesa/desactivar/'+miid,{
});
}

activarEstado2(miid){
return this.httpClient.get(this.urlapi+'mesa/activar/'+miid,{
});
}
////////////////////////// PERSONAL //////////////////////////
getPersonal(){

  return this.httpClient.get(this.urlapi+'personal/listar');
}

nuevaPersonal(minombre,micondicion){
  return this.httpClient.post(this.urlapi+'personal/guardar',{
    nombre: minombre,
    condicion: micondicion
});}


deleteData5(id){
return this.httpClient.delete('http://127.0.0.1:8000/personal/eliminar/'+id);
}

editarEstado5(nombre,id){
return this.httpClient.put(this.urlapi+'personal/actualizar/',{
nombre:nombre,
id:id
});
}
/////////////////////////// PLATO PEDIDO /////////////////////////

getPlato_pedido(){
  return this.httpClient.get(this.urlapi+'plato_pedido/listar');
  }
  
nuevaPlato_pedido(miidplato,miidpedido){
    return this.httpClient.post(this.urlapi+'plato_pedido/guardar',{
      idplato:miidplato,
      idpedido:miidpedido,
});}
  
deleteData6(id){
      return this.httpClient.delete('http://127.0.0.1:8000/plato_pedido/eliminar/'+id);
      }
      
editarEstado6(idpedido,idplato,id){
  return this.httpClient.put(this.urlapi+'plato_pedido/actualizar/',{
  id:id,
  idplato:idplato,
  idpedido:idpedido,
  });}
/////////////////////////// PEDIDO /////////////////////////

getPedido(){
  return this.httpClient.get(this.urlapi+'pedido/listar');
  }
  
nuevaPedido(minumero_mesa,mitipo_pedido,micondicion,miconsumo,miidpersonal,miidmesa){
    return this.httpClient.post(this.urlapi+'pedido/guardar',{
      numero_mesa:minumero_mesa,
      tipo_pedido:mitipo_pedido,
      condicion:micondicion,
      consumo:miconsumo,
      idpersonal:miidpersonal
});}

desactivarEstado3(miid){
  return this.httpClient.get(this.urlapi+'pedido/desactivar/'+miid,{
  });
  }
  
  activarEstado3(miid){
  return this.httpClient.get(this.urlapi+'pedido/activar/'+miid,{
  });
  }

deleteData7(id){
      return this.httpClient.delete('http://127.0.0.1:8000/pedido/eliminar/'+id);
      }
      
editarEstado7(idmesa,idpersonal,consumo,numero_mesa,tipo_pedido,id){
  return this.httpClient.put(this.urlapi+'pedido/actualizar/',{
  
  id:id,
  tipo_pedido:tipo_pedido,
  numero_mesa:numero_mesa,
  consumo:consumo,
  idpersonal:idpersonal,
  idmesa:idmesa
  });}
  
}
