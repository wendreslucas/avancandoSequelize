const { Router } = require('express')
const PessoaController = require('../controller/PessoaController')

const router = Router()

router.get('/pessoas/todos', PessoaController.pegaTodasPessoas)
router.get('/pessoas', PessoaController.pegaPessoasAtivas)
router.get('/pessoas/:id', PessoaController.pegaUmaPessoa)
router.post('/pessoas', PessoaController.criaPessoa)
router.post('/pessoas/:id/restaura', PessoaController.restauraPessoa)

router.put('/pessoas/:id', PessoaController.atualizaPessoa)
router.delete('/pessoas/:id', PessoaController.deletaPessoa)
router.get(
  '/pessoas/:estudanteId/matricula/:matriculaId',
  PessoaController.pegaUmaMatricula
)
router
  .post('/pessoas/:estudanteId/matricula', PessoaController.criaMatricula)
  .post(
    '/pessoas/:estudanteId/matricula/:matriculaId/restaura',
    PessoaController.restauraMatricula
  )
router.put(
  '/pessoas/:estudanteId/matricula/:matriculaId',
  PessoaController.atualizaMatricula
)
router.delete(
  '/pessoas/:estudanteId/matricula/:matriculaId',
  PessoaController.deletaMatricula
)

module.exports = router
