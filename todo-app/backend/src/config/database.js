const mongoose = require('mongoose')
mongoose.Promise = global.Promise

module.exports =  mongoose.connect('mongodb://localhost/todo', {
    //useNewUrlParser: true,
    //useUnifiedTopology: true, 
    useMongoClient: true
    //useMongoClient: true,
    /* other options */
  });

//mongoose.connect('mongodb://localhost/todo')
