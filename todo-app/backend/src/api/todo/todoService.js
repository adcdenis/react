const todo = require('./todo')

todo.methods(['get','post','put','delete'])
todo.updateOption({
new: true, 
runValidatos: true
})

