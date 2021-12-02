import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Pedidos } from '../models/pedidos';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: "root"
})
export class PedidosService   {
  selectedPedidos: Pedidos;
  //readonly URL_API = "http://localhost:4000/"

  constructor(private http:HttpClient) {
    this.selectedPedidos = new Pedidos();
  }

  postPedido(Pedidos:Pedidos) {
    return this.http.post('http://localhost:4000/crearp', Pedidos);
  }

  getPedidos(): Observable <any>{
    return this.http.get("http://localhost:4000/vertodos");
  }

  putPedido(Pedidos:Pedidos) {
    return this.http.put('http://localhost:4000/actualizarp' + `/${Pedidos._id}` , Pedidos);
  }

deletePedido(_id:String) {
  return this.http.delete('http://localhost:4000/eliminarp' + `/${_id}`);
  }
}
