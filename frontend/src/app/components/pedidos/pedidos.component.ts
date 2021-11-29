import { Component, OnInit } from '@angular/core';
import { Pedidos} from "../../models/pedidos"
import { pedidosService } from '../../services/pedidos.service';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css'],
  providers: [pedidosService]
})
export class PedidosComponent implements OnInit {

  PedidosArr: Pedidos[];
  selectedPedido: Pedidos = new Pedidos();

  constructor(private pedidosService: pedidosService) { }

  ngOnInit(): void {
    this.getPedidos()
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      // this.carreraService.selectedCarrera = new Carrera();
      this.selectedPedido = new Pedidos();
    }
  }

  getPedidos(){
    this.pedidosService.getPedidos().subscribe({
      next: (data) => {
        this.PedidosArr = data.result;
        // this.selectedCarrera = data.result;
        console.log(data)
      },
      error: (error) => console.error(error)
    })
  }

  addCarrera(carrera: Pedidos) {
    console.log(carrera);
    if (carrera._id) {
      this.pedidosService.putPedido(carrera).subscribe((res) => {
        // this.resetForm();
        console.log(res);
        this.getPedidos();
      });
    } else {
      this.pedidosService.postPedido(carrera).subscribe((res) => {
        this.getPedidos();
        // this.resetForm();
      });
    }
  }


  editCarrera(carrera: Pedidos) {
    // this.carreraService.selectedCarrera = carrera;
    this.selectedPedido = carrera;
    this.addCarrera(this.selectedPedido)
  }
  deleteCarrera(carrera: Pedidos) {
    if (confirm("Seguro de querer borrarla?")) {

      this.pedidosService.deletePedido(carrera._id).subscribe((res) => {
        this.getPedidos();
        // this.resetForm();
      });
    }
  }

}
