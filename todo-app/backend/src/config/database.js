const mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.set()
module.exports =  mongoose.createConnection('mongodb://localhost/todo', {
    useMongoClient: true,
    /* other options */
  });

//mongoose.connect('mongodb://localhost/todo')
