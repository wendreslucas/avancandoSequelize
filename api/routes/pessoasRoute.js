const { Router } = require('express')
const PessoaController = require('../controller/PessoaController')

const router = Router()

router
  .get('/pessoas/todos', PessoaController.pegaTodasPessoas)
  .get('/pessoas', PessoaController.pegaPessoasAtivas)
  .get('/pessoas/:id', PessoaController.pegaUmaPessoa)
  .get(
    '/pessoas/:estudanteId/matricula/:matriculaId',
    PessoaController.pegaUmaMatricula
  )
  .get('/pessoas/:estudanteId/matricula', PessoaController.pegaMatriculas)
  .get(
    '/pessoas/matricula/:turmaId/confirmadas',
    PessoaController.pegaMatriculasPorTurma
  )
  .get('/pessoas/matricula/lotada', PessoaController.pegaTurmaLotada)
  .post('/pessoas', PessoaController.criaPessoa)

  .post('/pessoas/:id/restaura', PessoaController.restauraPessoa)
  .post('/pessoas/:estudanteId/matricula', PessoaController.criaMatricula)
  .post(
    '/pessoas/:estudanteId/matricula/:matriculaId/restaura',
    PessoaController.restauraMatricula
  )
  .post('/pessoas/:estudanteId/cancela', PessoaController.cancelaPessoa)

  .put('/pessoas/:id', PessoaController.atualizaPessoa)
  .delete('/pessoas/:id', PessoaController.deletaPessoa)

  .put(
    '/pessoas/:estudanteId/matricula/:matriculaId',
    PessoaController.atualizaMatricula
  )
  .delete(
    '/pessoas/:estudanteId/matricula/:matriculaId',
    PessoaController.deletaMatricula
  )

module.exports = router
