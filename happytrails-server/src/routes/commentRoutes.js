const express = require('express')
const mongoose = require('mongoose')
const requireAuth = require('../middlewares/requireAuth')

const Comment = mongoose.model('Comment')

const router = express.Router()

router.use(requireAuth)

// Fetch User Comments
router.get('/comments', async (req, res) => {
  try {
    const comments = await Comment.find({ userId: req.user._id }) 
    res.send(comments)
  } catch (err) {
    res.status(422).send({ error: err.message })
  }
})

// Fetch Trail Comments
router.get('/comments/:id', async (req, res) => {
  try {
    const comments = await Comment.find({ trailId: req.params.id }) 
    res.send(comments)
  } catch (err) {
    res.status(422).send({ error: err.message })
  }
})

// Post User Comment 
router.post('/comments', async (req, res) => {
  const { trailId, body } = req.body

  if (!trailId || !body) {
    return res.status(422).send({ error: 'You must provide a trail id and comment body' })
  }

  try {
    const comment = new Comment({ trailId, body, userId: req.user._id })
    await comment.save()
    res.send(comment)
  } catch (err) {
    res.status(422).send({ error: err.message })
  }
})

// Delete User Comment
router.delete('/comments/:id', async (req, res) => {
  const { id } = req.params

  if (!id) {
    return res.status(422).send({ error: 'You must provide a comment id'})
  }
  
  try {
    const comment = await Comment.findByIdAndDelete(id)
    console.log(`Deleted comment of id # ${id}`)
    res.send(comment)
  } catch (err) {
    console.log(err)
    res.status(422).send({ error: err.message })
  }
})

module.exports = router