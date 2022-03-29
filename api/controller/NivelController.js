// const database = require('../models')

const { NiveisServices } = require('../services')
const niveisService = new NiveisServices()

class NivelController {
  static async criaNivel(req, res) {
    const novoNivel = req.body
    try {
      const novoNivelCriado = await niveisService.criaUmRegistro(novoNivel)
      return res.status(201).json(novoNivelCriado)
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  }

  static async pegaTodosNiveis(req, res) {
    try {
      const todosOsNiveis = await niveisService.pegaTodosOsRegistros()
      return res.status(200).json(todosOsNiveis)
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  }

  static async pegaUmNivel(req, res) {
    const { id } = req.params
    try {
      const umNivel = await niveisService.pegaUmRegistro({
        id
      })
      return res.status(200).json(umNivel)
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  }

  static async atualizaNivel(req, res) {
    const { id } = req.params
    const novasInfos = req.body
    try {
      await niveisService.atualizaRegistro(novasInfos, Number(id))
      const nivelAtualizado = await niveisService.pegaUmRegistro({
        id
      })
      return res.status(200).json(nivelAtualizado)
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  }

  static async deletaNivel(req, res) {
    const { id } = req.params
    try {
      await niveisService.apagaRegistro(Number(id))
      return res.status(200).json(`Nível ${id} deletado com sucesso!`)
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  }

  static async restauraNivel(req, res) {
    const { id } = req.params
    try {
      await niveisService.restauraRegistro(Number(id))
      return res.status(200).json(`Nível ${id} restaurado com sucesso!`)
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  }
}

module.exports = NivelController
