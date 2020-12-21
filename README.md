# MEAN-Stack-application
The file structure is as follow
|
  - Client
  - Server
  - README.md
  
This is a complete MEAN (Mongo, Express, Angular and Node).
The client folder contains the angular code for the application ui
The server folder contains the backend code dealing with data modification using node,express and mongodb.

For this application I have created a sample database which deals with tracking of tweets similar to the one created on twitter.
Since, the inspiration was taken from twitter, the database name used is "twitter" and in order to track the tweets, the following schema has been created

collection Name: tweet_track
fields structure:
|- name
  |- String
|- tweet
  |-String
|- retweets
  |-Number
|- hearts
  |-Number
|- comments
  |-Number

This collection will allow us to keep track of the tweet created by the user. Tracking with respect to tracking the number of retweets, number of hearts on the tweet and number of comments made on the tweet


**Client**
As mentioned earlier, the client side contains the code for the application UI. To create the ui angular framework was used. 
The UI contains simple table created by akveo called ng2-smart-table.
The link to the library is as followed:
https://github.com/akveo/ng2-smart-table

Also, this angular code interacts with backend server using HTTPClientModule provided by angular.
