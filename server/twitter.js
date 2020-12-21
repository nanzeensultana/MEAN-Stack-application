const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
require('./twitter_schema');
const twitterSchema =mongoose.model('tweet_track');



router.post('/action', (req, res) => {
    if(req.body.action=="insert"){
        twitterSchema.insertMany([req.body.data])
        .then((tweet_data)=>{
            res.send(tweet_data)
        })
        
    }else if(req.body.action=="search"){
        twitterSchema.find().sort(req.body.data).limit(req.body.limit)
        .then((tweet_data)=>{
            res.send(tweet_data)
        })

    }else if(req.body.action=="delete"){
        twitterSchema.deleteOne(req.body.where)
            .then((tweet_data)=>{
                res.send(tweet_data)
            })
    }else if(req.body.action=="update"){
        
        twitterSchema.updateOne(req.body.where,req.body.data)
            .then((tweet_data)=>{
                res.send(tweet_data)
            })
    }
    
    
})

module.exports = router