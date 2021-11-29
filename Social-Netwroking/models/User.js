const { Schema, model, Types } = require('mongoose');
// const dateFormat = require('../utils/dateFormat');

const userSchema = new Schema(
  {
    // set custom id to avoid confusion with parent comment _id
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/] // must match a valid email address
    },
    thoughts: [
      {type: Schema.Types.ObjectId, ref: 'Thought'},
    ],
    friends: [
      {type: Schema.Types.ObjectId, ref: 'User' },
      ],
  },
);

userSchema.virtual('friendCount').get(function() {
  return this.friends.length;
});

const User = model('User', userSchema);

module.exports = User;
