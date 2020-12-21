const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
require('./twitter_schema');
const twitterSchema =mongoose.model('tweet_track');



router.post('/insert', (req, res) => {
        twitterSchema.insertMany([req.body.data])
        .then((tweet_data)=>{
            res.send(tweet_data)
        })
    });

router.post('/update', (req, res) => {
    twitterSchema.updateOne(req.body.where,req.body.data)
    .then((tweet_data)=>{
        res.send(tweet_data)
    })
});

router.post('/delete', (req, res) => {
    twitterSchema.deleteOne(req.body.data)
            .then((tweet_data)=>{
                res.send(tweet_data)
            })
});

router.get('/searchRetweets', (req, res) => {
    twitterSchema.find().sort({"retweets":"1"})
    .then((tweet_data)=>{
        res.send(tweet_data)
    })
});

router.get('/all', (req, res) => {
    twitterSchema.find()
    .then((tweet_data)=>{
        res.send(tweet_data)
    })
});

router.get('/searchComments', (req, res) => {
    twitterSchema.find().sort({"comments":"-1"}).limit(5)
    .then((tweet_data)=>{
        res.send(tweet_data)
    })
});
        
   
module.exports = router