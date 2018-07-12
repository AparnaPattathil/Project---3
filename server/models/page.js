const mongoose = require('mongoose');
const {Schema} = mongoose;

const pageSchema = new Schema({  
  title: {
    type: String,
    required:true
  },
 date: {type: Date, required: true},
 text: {type: String},
_albums: {type: Schema.Types.ObjectId, ref: "Album"}

  
});

const Page = mongoose.model('Page', pageSchema);

module.exports = Page;