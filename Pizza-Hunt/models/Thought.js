const { Schema, model, Types } = require('mongoose');
const reactionSchema = required('./Reaction')
const dateFormat = require('../utils/dateFormat');

const thoughtSchema = new Schema(
  {
    // set custom id to avoid confusion with parent comment _id
    thoughtText: {
      type: string,
      required: true,
      validate: [/^(1-280)$/]
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
      type: Array [reactionSchema]
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
