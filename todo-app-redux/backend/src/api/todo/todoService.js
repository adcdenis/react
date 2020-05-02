const todo = require('./todo')

todo.methods(['get','post','put','delete'])
todo.updateOptions({new: true, runValidatos: true})

module.exports = todo

