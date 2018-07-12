const mongoose = require('mongoose');
const {Schema} = mongoose;

const albumSchema = new Schema({  
  title: {
    type: String,
    required: [true, 'The title is required']
  },
 
_pages: [{type:Schema.Types.ObjectId, ref: "Page"}] ,
_owner: {type: Schema.Types.ObjectId, ref: "User"},

  
});

const Albums = mongoose.model('Albums', albumSchema);

module.exports = Albums;