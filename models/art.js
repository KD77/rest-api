const mongoose = require('mongoose')


const artSchema = new mongoose.Schema({
  
  name: {
    type: String,
    required: true
  },
  description: {
    type: String, 
    required: true
  },
  view:{
    type: String

  },
  date: {
    type: Date,
    default:Date.now
    
  }

});

module.exports= mongoose.model('Art', artSchema);
