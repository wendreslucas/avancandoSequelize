const { Router } = require('express')
const TurmaController = require('../controller/TurmaController')

const router = Router()

router
  .get('/turmas', TurmaController.pegaTodasTurmas)
  .get('/turmas/:id', TurmaController.pegaUmaTurma)
  .post('/turmas', TurmaController.criaTurma)
  .post('/turmas/:id/restaura', TurmaController.restauraTurma)
  .put('/turmas/:id', TurmaController.atualizaTurma)
  .delete('/turmas/:id', TurmaController.deletaTurma)

module.exports = router
