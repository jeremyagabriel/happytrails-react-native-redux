const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  trailId: {
    type: Number,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  date: { 
    type: Date,
    default: Date.now 
  }
})

mongoose.model('Comment', commentSchema)