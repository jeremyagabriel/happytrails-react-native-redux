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

router.post('/favorites', async (req, res)  => {
  const { trailId } = req.body

  if (!trailId) {
    return res.status(422).send({ error: 'You must provide a trail id' })
  }

  try {
    const favorite = new Favorite({ trailId, userId: req.user._id })
    await favorite.save()
    res.send(favorite)
  } catch (err) {
    res.status(422).send({ error: err.message })
  }
})

router.delete('/favorites/:trailId', async (req, res) => {
  const favoriteToDelete = await Favorite.find({ userId: req.user._id, trailId: req.params.trailId })
  const { _id } = favoriteToDelete[0]

  if (!_id) {
    return res.status(422).send({ error: 'You must provide a favorite id'})
  }

  try {
    const favorite = await Favorite.findByIdAndDelete(_id)
    console.log(`Deleted favorite of id # ${_id}`)
    res.send(favorite)
  } catch (err) {
    console.log(err)
    res.status(422).send({ error: err.message })
  }
})

module.exports = router