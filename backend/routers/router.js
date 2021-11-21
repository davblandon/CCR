const { Router } = require('express');
const router = Router();

var controllerUsuarios=require('../controllers/controllerUsuarios');
router.get('/prueba',controllerUsuarios.prueba);
router.post('/crear',controllerUsuarios.saveusuario);
router.get('/ver/:id',controllerUsuarios.buscarusuario);
router.get('/ver/:id?',controllerUsuarios.listarAllusers);
router.put('/actualizar/:id',controllerUsuarios.updateuser);
router.delete('/eliminar/:id',controllerUsuarios.deleteuser);


module.exports = router;