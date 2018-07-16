const mongoose = require('mongoose');
const {Schema} = mongoose;

const pageSchema = new Schema({  
  title: {
    type: String,
    required:true
  },
 date: {type: Date, required: true},
 text: {type: String},
});

const Page = mongoose.model('Page', pageSchema);

module.exports = Page;