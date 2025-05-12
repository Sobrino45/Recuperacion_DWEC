import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const URL_BASE = "https://ejerciciostutorialesya.com/vue/datos.php";

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private httpclient:HttpClient) { }

  // Escribimos un método por cada una de las acciones en el API
  // Obtener productos, modificar, eliminar, etc
  obtenerProductos(){
    return this.httpclient.get(URL_BASE);
  }

}
