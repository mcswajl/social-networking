const { User, Reaction } = require('../models');

const userController = {

getAllUsers(reg, res) {
  User.find({})
      .populate({
        path: 'reactions',
        select: '-__v'
      })
      .select('-__v')
      .sort({ _id: -1 })
      .then(dbUserData => res.json(dbUserData))
      .catch(err => {
        console.log(err);
        res.sendStatus(400);
    })
  },

  getUserById({ params }, res) {
    User.findOne({ _id: params.id })
    .populate({
      path: 'thought',
      select: '-__v'
    })
    .select('-__v')
    .then(dbThoughtData => res.json(dbThoughtData))
    .catch(err => {
      console.log(err);
      res.sendStatus(400);
      })
    },

  // add user
  createUser({ params, body }, res) {
    User.create(body)
    .then(dbUserData => res.json(dbUserData))
    .catch(err => res.json(err));
    console.log(params);
  },

  // update user
  updateUserById({params, body}, res) {
    userController.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
    .then(dbUserData => {
      if (!dbUserData) {
        res.status(404).json({ message: 'No User found with this id!' });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => res.json(err));
},

  
  // delete user
  deleteUserById({params, body}, res) {
    userController.findOneAndDelete({ _id: params.id }, body, { new: true, runValidators: true })
    .then(dbUserData => {
      if (!dbUserData) {
        res.status(404).json({ message: 'No User found with this id!' });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => res.json(err));
},


  // add friend 
  createFriend({ params, body }, res) {
    User.findOneAndUpdate({_id: params.userId}, 
      {$push: {reactions: body}}, 
      {new: true, runValidators: true})
    .populate({path: 'reactions', select: '-__v'})
    .select('-__v')
    .then(dbUserData => {
    if (!dbUserData) {
        res.status(404).json({message: 'No User with this particular ID!'});
        return;
    }
    res.json(dbUserData);
    })
    .catch(err => res.status(400).json(err))
  },

  deleteFriend({ params, body }, res) {
    User.findOneAndUpdate({_id: params.userId}, 
      {$pull: {reactions: body}}, 
      {new: true, runValidators: true})
    .populate({path: 'reactions', select: '-__v'})
    .select('-__v')
    .then(dbUserData => {
    if (!dbUserData) {
        res.status(404).json({message: 'No User with this particular ID!'});
        return;
    }
    res.json(dbUserData);
    })
    .catch(err => res.status(400).json(err))
  },
};

module.exports = userController;
