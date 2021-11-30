const router = require('express').Router();
const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThoughtById,
  deleteThoughtById,
  createReaction,
  deleteReaction
} = require('../../controllers/thought-controller');

// /api/thoughts/
router
.route('/')
.get(getAllThoughts)
.post(createThought)

router
.route('/:id')
.get(getThoughtById)
.put(updateThoughtById)
.delete(deleteThoughtById)

// /api/thoughtss/:thoughtId/reactions
router
.route('/:thoughtId/reactions/reactionId')
.post(createReaction)
.delete(deleteReaction);

module.exports = router;