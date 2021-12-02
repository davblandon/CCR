var app = require('./app');
var mongoose =require('./src/conexDB/conn');
var p = app.get('port');
app.listen(p, () =>{
console.log("servidor corriendo ok")
console.log("Escuchando por el puerto : "+p)
});