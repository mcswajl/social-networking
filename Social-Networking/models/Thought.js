const { Schema, model, Types } = require('mongoose');
// const reactionSchema = require('./Reaction')
const dateFormat = require('../utils/dateFormat');

const reactionSchema = new Schema(
  {
    // set custom id to avoid confusion with parent comment _id
    reactionId: {
      // mongoose.ObjectId !== mongoose.Types.ObjectId,
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId()
    },

    reactionBody: {
      type: String,
      required: true,
      validate: /^.{1,280}$/
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

const thoughtSchema = new Schema(
  {
    // set custom id to avoid confusion with parent comment _id
    thoughtText: {
      type: String,
      required: true,
      validate: /^.{1,280}$/
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: createdAtVal => dateFormat(createdAtVal)
    },
    username: {
      type: String,
      required: true
    },
    reactions: {
      type: [reactionSchema]
    }
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false
  });

thoughtSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
});


const Thought = model('Thought', thoughtSchema);

module.exports = Thought;
