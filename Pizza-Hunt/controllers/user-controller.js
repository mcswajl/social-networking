const { Thought, User, Reaction } = require('../models');

const userController = {
  // add thought to p
  addUser({ params, body }, res) {
    console.log(params);
    Comment.create(body)
      .then(({ _id }) => {
        return Iser.findOneAndUpdate(
          { _id: params.pizzaId },
          { $push: { comments: _id } },
          { new: true }
        );
      })
      .then(dbUserData => {
        console.log(dbUserData);
        if (!dbUserData) {
          res.status(404).json({ message: 'No user found with this id!' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => res.json(err));
  },

  // add reply to reaction
  addReply({ params, body }, res) {
    reaction.findOneAndUpdate(
      { _id: params.commentId },
      { $push: { replies: body } },
      { new: true, runValidators: true }
    )
      .then(dbUserData => {
        if (!dbUserData) {
          res.status(404).json({ message: 'No user found with this id!' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => res.json(err));
  },

  // remove comment
  removeReaction({ params }, res) {
    Reaction.findOneAndDelete({ _id: params.commentId })
      .then(deletedComment => {
        if (!deletedComment) {
          return res.status(404).json({ message: 'No reaction with this id!' });
        }
        return Reaction.findOneAndUpdate(
          { _id: params.reactionId },
          { $pull: { comments: params.commentId } },
          { new: true }
        );
      })
      .then(dbReactionData => {
        if (!dbReactionData) {
          res.status(404).json({ message: 'No reaction found with this id!' });
          return;
        }
        res.json(dbReactionData);
      })
      .catch(err => res.json(err));
  },
  // remove reaction
  removeReply({ params }, res) {
    Reaction.findOneAndUpdate(
      { _id: params.commentId },
      { $pull: { replies: { replyId: params.replyId } } },
      { new: true }
    )
      .then(dbReactionData => res.json(dbReactionData))
      .catch(err => res.json(err));
  }
};

module.exports = userController;
