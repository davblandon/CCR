export class Pedidos {
  _id:String;
  nombre:String;
  escuela:String;
  universidad:String;
  duracion:Number;

  constructor(_id = '', nombre = '', escuela = '', universidad = '', duracion = 0){
      this._id=_id;
      this.nombre=nombre;
      this.escuela=escuela;
      this.universidad=universidad;
      this.duracion=duracion
  }
}
