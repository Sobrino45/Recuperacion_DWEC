import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-listadoproductos',
  standalone: false,
  templateUrl: './listadoproductos.component.html',
  styleUrl: './listadoproductos.component.css'
})
export class ListadoproductosComponent implements OnInit {
  palabra = "";

  productos:any = [];

  constructor(private productosservice:ProductosService) { }

  ngOnInit(): void {
    this.productosservice.obtenerProductos().subscribe(
      (datos)=>{
        this.productos = datos;
        console.log(this.productos);
      }
    )
  }

}
