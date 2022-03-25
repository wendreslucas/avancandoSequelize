const { Router } = require('express')
const TurmaController = require('../controller/TurmaController')
const { route } = require('./pessoasRoute')

const router = Router()

router.get('/turmas', TurmaController.pegaTodasTurmas)
router.get('/turmas/:id', TurmaController.pegaUmaTurma)
router.post('/turmas', TurmaController.criaTurma)
router.put('/turmas/:id', TurmaController.atualizaTurma)
router.delete('/turmas/:id', TurmaController.deletaTurma)

module.exports = router
