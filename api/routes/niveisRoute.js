const { Router } = require('express')
const NivelController = require('../controller/NivelController')

const router = Router()

router
  .get('/niveis', NivelController.pegaTodosNiveis)
  .get('/niveis/:id', NivelController.pegaUmNivel)
  .post('/niveis', NivelController.criaNivel)
  .post('/niveis/:id/restaura', NivelController.restauraNivel)
  .put('/niveis/:id', NivelController.atualizaNivel)
  .delete('/niveis/:id', NivelController.deletaNivel)

module.exports = router
