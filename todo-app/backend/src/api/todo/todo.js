const restFull = require('node-restful')
const mongoose = restFull.mongoose

const todoSchema = new mongoose.Schema({
description : { type: String, require: true},
done : { type: Boolean, require: true},
createAt : { type: Date, default: Date.now}
})

module.exports = restFull.model('Todo', todoSchema)