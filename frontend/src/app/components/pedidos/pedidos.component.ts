import { Component, OnInit } from '@angular/core';
import { Pedidos} from "../../models/pedidos"
import { PedidosService } from '../../services/pedidos.service';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css'],
  providers: [PedidosService]
})
export class PedidosComponent implements OnInit {

  PedidosArr: Pedidos[] =[];
  selectedPedido: Pedidos = new Pedidos();

  constructor(private pedidosService: PedidosService) { }

  ngOnInit() {
    this.getPedidos()
  };


  getPedidos(){
    this.pedidosService.getPedidos().subscribe(
    (data) => {
        this.PedidosArr = data.result;
        console.log(data)
      }
    )
  }

  addPedido(pedido: Pedidos) {
    if (pedido._id) {
      this.pedidosService.putPedido(pedido).subscribe((res) => {
        console.log(res);
        this.getPedidos();
      });
    } else {
      this.pedidosService.postPedido(pedido).subscribe((res) => {
        console.log(pedido);
        location.reload();
        this.getPedidos();
      });
    }
  }


  editPedido(pedido: Pedidos) {
    this.selectedPedido = pedido;
    this.addPedido(this.selectedPedido)
  }

  deletePedido(pedido: Pedidos) {
    if (confirm("Seguro de querer CANCELAR el pedido?")) {

      this.pedidosService.deletePedido(pedido._id).subscribe((res) => {
        this.getPedidos();
        location.reload();
      });
    }
  }


}
