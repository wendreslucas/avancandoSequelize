const { TurmasServices } = require('../Services')
const turmasService = new TurmasServices()
class TurmaController {
  static async criaTurma(req, res) {
    const novaTurma = req.body
    try {
      const novaTumaCriada = await turmasService.criaUmRegistro(novaTurma)
      return res.status(201).json(novaTumaCriada)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async pegaTodasTurmas(req, res) {
    const { data_inicial, data_final } = req.query
    const where = {}
    data_inicial || data_final ? (where.data_inicio = {}) : null
    data_inicial ? (where.data_inicio[Op.gte] = data_inicial) : null
    data_final ? (where.data_inicio[Op.lte] = data_final) : null

    try {
      const todasTurmas = await turmasService.pegaTodosOsRegistros()
      return res.status(200).json(todasTurmas)
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  }

  static async pegaUmaTurma(req, res) {
    const { id } = req.params
    try {
      const umaPessoa = await turmasService.pegaUmRegistro({ id })
      return res.status(200).json(umaPessoa)
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  }

  static async atualizaTurma(req, res) {
    const { id } = req.params
    const novasInfos = req.body
    try {
      await turmasService.atualizaRegistro(novasInfos, Number(id))
      const turmaAtualizada = await turmasService.pegaUmRegistro({ id })
      return res.status(200).json(turmaAtualizada)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async deletaTurma(req, res) {
    const { id } = req.params
    try {
      await turmasService.apagaRegistro(Number(id))
      return res.status(200).json({ message: `id ${id} deletado com sucesso` })
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  }

  static async restauraTurma(req, res) {
    const { id } = req.params
    try {
      await turmasService.restauraRegistro(Number(id))
      return res
        .status(200)
        .json({ message: `id ${id} restaurado com sucesso` })
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  }
}

module.exports = TurmaController
