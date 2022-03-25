const { Router } = require('express')
const NivelController = require('../controller/NivelController')

const router = Router()

router.get('/niveis', NivelController.pegaTodosNiveis)
router.get('/niveis/:id', NivelController.pegaUmNivel)
router.post('/niveis', NivelController.criaNivel)
router.post('/niveis/:id/restaura', NivelController.restauraNivel)
router.put('/niveis/:id', NivelController.atualizaNivel)
router.delete('/niveis/:id', NivelController.deletaNivel)

module.exports = router
