const mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório."

mongoose.Error.messages.Number.min =
  "O '{VALUE}' informado é menor que o limite mínimo de '{MIN}'."
mongoose.Error.messages.Number.max =
  "O '{VALUE}' informado é maior que o limite máximo de '{MAX}'."
mongoose.Error.messages.String.enum =
  "'{VALUE}' não é válido para o atributo '{PATH}'."

const urlHeroku = 'mongodb://mymoneyapp:mymoneyapp1@ds261332.mlab.com:61332/heroku_pgmnb2sr'
const urlLocal =  'mongodb://localhost/mymoney'
const url = process.env.MONGOLAB_URI ? process.env.MONGOLAB_URI : urlLocal

module.exports = mongoose.connect(url, { useNewUrlParser: true })
