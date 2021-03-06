const mongoose = require('mongoose')

const favoriteSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  trailId: {
    type: Number,
    required: true
  }
})

mongoose.model('Favorite', favoriteSchema)