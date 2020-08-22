const dbConfig = require('../config/db.config')
const Sequelize = require('sequelize')

let db = {}
console.log('initializing db models...')
const sequelize = new Sequelize(
  dbConfig.DB,
  dbConfig.USER,
  dbConfig.PASSWORD,
  {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,

    pool: {
      max: dbConfig.pool.max,
      min: dbConfig.pool.min,
      acquire: dbConfig.pool.acquire,
      idle: dbConfig.pool.idle
    }
  }
)

db.Sequelize = Sequelize;
db.sequelize = sequelize;

const getFiles = require('../utils/directoryGetFiles')
const files = getFiles(__dirname)

db.user = require("./user.model.js")

// files.forEach((file) => {
//   if(/.model.js/.test(file)) {
//     Object.assign(db, {
//       [file.split('.model.js')[0]]:
//       require(`${__dirname}/${file}`)
//     })
//   }
// })

module.exports = db;
