const mongoose = require('mongoose')
const playerSchema = new mongoose.Schema({
    name: {
      type: String,
    },
    tweet: {
      type: String,
    },
    retweets: {
      type: Number,
    },
    hearts:{
        type: Number

    },
    comments:{
        type:Number
    }
  })

  module.exports = mongoose.model('tweet_track', playerSchema);

