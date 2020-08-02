const express = require('express')
const mongoose = require('mongoose')
const requireAuth = require('../middlewares/requireAuth')

const Favorite = mongoose.model('Favorite')

const router = express.Router()

router.use(requireAuth)

router.get('/favorites', async (req, res) => {
  const favorites = await Favorite.find({ userId: req.user._id })

  res.send(favorites)
})

router.post('/favorites', async (req, res) => {
  const { trailId } = req.body

  if (!trailId) {
    return res.status(422).send({ error: 'You must provide a trail ID' })
  }

  try {
    const favorite = new Favorite({ trailId, userId: req.user._id })
    await favorite.save()
    res.send(favorite)
  } catch (err) {
    res.status(422).send({ error: err.message })
  }
})

module.exports = router