const restFull = require('node-restful')
const mongoose = restFull.mongoose

const todoSchema = new mongoose.Schema({
descricao : { type: String, require: true},
feito: { type: Boolean, required: true, default: false },
dataCriacao : { type: Date, default: Date.now}
})

module.exports = restFull.model('Todo', todoSchema)