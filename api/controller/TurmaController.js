const database = require('../models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

class TurmaController {
  static async pegaTodasTurmas(req, res) {
    const { data_inicial, data_final } = req.query
    const where = {}
    data_inicial || data_final ? (where.data_inicio = {}) : null
    data_inicial ? (where.data_inicio[Op.gte] = data_inicial) : null
    data_final ? (where.data_inicio[Op.lte] = data_final) : null

    try {
      const todasTurmas = await database.Turmas.findAll()
      return res.status(200).json(todasTurmas)
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  }

  static async pegaUmaTurma(req, res) {
    const { id } = req.params
    try {
      const umaPessoa = await database.Turmas.findOne({
        where: {
          id: Number(id)
        }
      })
      return res.status(200).json(umaPessoa)
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  }

  static async criaTurma(req, res) {
    const novaTurma = req.body
    try {
      const novaTumaCriada = await database.Turmas.create(novaTurma)
      return res.status(201).json(novaTumaCriada)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async atualizaTurma(req, res) {
    const { id } = req.params
    const novasInfos = req.body
    try {
      await database.Turmas.update(novasInfos, {
        where: {
          id: Number(id)
        }
      })
      const turmaAtualizada = await database.Turmas.findOne({
        where: {
          id: Number(id)
        }
      })
      return res.status(200).json(turmaAtualizada)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async deletaTurma(req, res) {
    const { id } = req.params
    try {
      await database.Turmas.destroy({
        where: {
          id: Number(id)
        }
      })
      return res.status(200).json({ message: `id ${id} deletado com sucesso` })
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  }

  static async restauraTurma(req, res) {
    const { id } = req.params
    try {
      await database.Turmas.restore({
        where: {
          id: Number(id)
        }
      })
      return res
        .status(200)
        .json({ message: `id ${id} restaurado com sucesso` })
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  }
}

module.exports = TurmaController
