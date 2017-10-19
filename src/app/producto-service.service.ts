//Archivo (producto-service.service.ts)
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProductoServiceService{
  constructor(private http:Http) {}
  //Generamos las funciones que nos serviran para manipular nuestras entidades
  listar() {
    return this.http.get('http://localhost/myCRUD/src/api/productos.php?opcion=1');
  }
  detallar(id: number) {
    return this.http.get('http://localhost/myCRUD/src/api/productos.php?opcion=2&id=' + id);
  }
  guardar(item: Object) {
    return this.http.post('http://localhost/myCRUD/src/api/productos.php?opcion=3', item);
  } 
  modificar(item: Object) {
    return this.http.post('http://localhost/myCRUD/src/api/productos.php?opcion=4', item);
  }
  eliminar(id: number) {
    throw new Error("Method not implemented.");
  }
}