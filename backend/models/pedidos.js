var mongoose=require('mongoose');
var Schema = mongoose.Schema;

var PedidosSchema=Schema({
    descripcion:String,
    fechasolicitud:Date,
    horar:Date,
    servicio:String,
    tipoprenda:String,
    cantidaduni:String,
    fechaentrega:Date,
    horae:Date,
    direccionr:String,
    direccione:String,
    });

const Pedidos = mongoose.model('pedido',PedidosSchema);
module.exports = Pedidos;
