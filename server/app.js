const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('./twitter_schema');
const twitterSchema =mongoose.model('tweet_track');
mongoose.connect('mongodb://localhost/twitter', { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('connected to database'))
app.use(express.json())
var cors = require('cors')
var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 
}
app.use(cors(corsOptions))
const playerRouter = require('./twitter')

app.use('/', playerRouter)

app.listen(3000, () => console.log('server started'))
