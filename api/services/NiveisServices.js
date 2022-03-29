const Services = require('./Services')
const database = require('../models')

class NiveisServices extends Services {
  constructor() {
    super('Niveis')
  }

  async criaUmRegistro(dados) {
    return database[this.nomeDoModelo].create(dados)
  }

  async pegaTodosOsRegistros(where = {}) {
    return database[this.nomeDoModelo].findAll({ where: { ...where } })
  }

  async pegaUmRegistro(where = {}) {
    return database[this.nomeDoModelo].findOne({ where: { ...where } })
  }

  async atualizaRegistro(dadosAtualizados, id) {
    return database.sequelize.transaction(async transacao => {
      await super.atualizaRegistro(dadosAtualizados, id, {
        transaction: transacao
      })
    })
  }

  async apagaRegistro(id) {
    return database[this.nomeDoModelo].destroy({ where: { id: id } })
  }

  async restauraRegistro(id) {
    return database[this.nomeDoModelo].restore({ where: { id: id } })
  }
}

module.exports = NiveisServices
