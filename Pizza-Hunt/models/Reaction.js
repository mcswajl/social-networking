const { Schema, model, Types } = require('mongoose');
// const reactionSchema = required('./Reaction')
const dateFormat = require('../utils/dateFormat');

const reactionSchema = new Schema(
  {
    // set custom id to avoid confusion with parent comment _id
    reactionID: {
      // mongoose.ObjectId !== mongoose.Types.ObjectId,
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId()
    },

    reactionBody: {
      type: String,
      required: true,
      validate: [/^(1-280)$/]
    },
    username: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: createdAtVal => dateFormat(createdAtVal),
    }
  },
  {
    toJSON: {
      getters: true
    },
    id: false
  });



module.exports = reactionSchema;
