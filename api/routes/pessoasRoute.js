const { Router } = require('express')
const PessoaController = require('../controller/PessoaController')

const router = Router()

router.get('/pessoas', PessoaController.pegaTodasPessoas)
router.get('/pessoas/:id', PessoaController.pegaUmaPessoa)
router.post('/pessoas', PessoaController.criaPessoa)
router.put('/pessoas/:id', PessoaController.atualizaPessoa)
router.delete('/pessoas/:id', PessoaController.deletaPessoa)
router.get(
  '/pessoas/:estudanteId/matricula/:matriculaId',
  PessoaController.pegaUmaMatricula
)
router.post('/pessoas/:estudanteId/matricula', PessoaController.criaMatricula)
router.put(
  '/pessoas/:estudanteId/matricula/:matriculaId',
  PessoaController.atualizaMatricula
)
router.delete(
  '/pessoas/:estudanteId/matricula/:matriculaId',
  PessoaController.deletaMatricula
)

module.exports = router
