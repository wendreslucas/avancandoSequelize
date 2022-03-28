'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Pessoas extends Model {
    static associate(models) {
      Pessoas.hasMany(models.Matriculas, {
        foreignKey: 'estudante_id'
      })
      Pessoas.hasMany(models.Turmas, {
        foreignKey: 'docente_id'
      })
    }
  }
  Pessoas.init(
    {
      nome: {
        type: DataTypes.STRING,
        validate: {
          validaNome: function (dado) {
            if (dado.length < 3) {
              throw new Error('Nome deve ter pelo menos 3 caracteres')
            }
          }
        }
      },
      ativo: DataTypes.BOOLEAN,
      email: {
        type: DataTypes.STRING,
        validate: {
          isEmail: {
            args: true,
            msg: 'Email inválido'
          }
        }
      },
      role: DataTypes.STRING
    },
    {
      sequelize,
      paranoid: true,
      defaultScope: {
        where: {
          ativo: true
        }
      },
      scopes: {
        todos: {
          where: {}
        }
      },
      modelName: 'Pessoas'
    }
  )
  return Pessoas
}
