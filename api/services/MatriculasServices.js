const Services = require('./Services')
const database = require('../models')

class MatriculasService extends Services {
  constructor() {
    super('Matriculas')
  }
}

module.exports = MatriculasService
