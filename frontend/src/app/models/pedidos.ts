import { formatDate } from "@angular/common";

export class Pedidos {
  _id:String;
  descripcion:String;
  //fechasolicitud:Date;
  //horar:Date;
  servicio:String;
  tipoprenda:String;
  cantidaduni:Number;
  //fechaentrega:Date;
  //horae:Date;
  direccionr:String;
  direccione:String;

  constructor( _id="",descripcion = '', servicio = '',tipoprenda = '',cantidaduni = 0 ,direccionr = '',direccione = '' ){
      this._id=_id;
      this.descripcion=descripcion;
      //this.fechasolicitud=fechasolicitud;
      //this.horar=horar;
      this.servicio=servicio;
      this.tipoprenda=tipoprenda;
      this.cantidaduni=cantidaduni;
      //this.fechaentrega=fechaentrega;
      //this.horae=horae;
      this.direccionr=direccionr;
      this.direccione=direccione;
  }
}
