const mongoose = require('mongoose');
const {Schema} = mongoose;

const pageSchema = new Schema({  
  title: {
    type: String,
    default: ""
  },
 date: {type: Date, default: Date.now()},
 text: {type: String, default: ""},
});

const Page = mongoose.model('Page', pageSchema);

module.exports = Page;