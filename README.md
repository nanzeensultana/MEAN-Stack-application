# MEAN-Stack-application
The file structure is as follow
|
  - Client
  - Server
  - README.md
  
This is a complete MEAN (Mongo, Express, Angular and Node).
The client folder contains the angular code for the application ui
The server folder contains the backend code dealing with data modification using node,express and mongodb.

**Server**
You can start the server by running
node app.js 
in the server directory of the repository.

**Database**
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

**APIs**
For this application 6 APIs were created
**Insert**
You can access it using the url "http://localhost:3000/insert".
This is a POST API whose sample request JSON is:
{
      "data":{
        "name":"nazneen",
        "tweet":"I love this application",
        "hearts":34,
        "comments":56,
        "retweets":67
      }
    }
This api will insert the sent data into the tweet_track collection.

**Update**
You can access it using the url "http://localhost:3000/update".
This is a POST API whose sample request JSON is:
{
      "data":{
        "tweet":"I love this application",
        "hearts":34,
        "comments":56,
        "retweets":67
      }
      "where":{
        "name":"nazneen"
      }
    }
This api will update the collection where name is nazneen in tweet_track collection.

**Delete**
You can access it using the url "http://localhost:3000/delete".
This is a POST API whose sample request JSON is:
{
      "data":{
        "name":"nazneen"
      }
    }
This api will delete the index where name is nazneene in the tweet_track collection.

**all**
You can access it using the url "http://localhost:3000/all".
This is a GET API which will return all the indexes in the tweet_api collection.

**searchRetweets**
You can access it using the url "http://localhost:3000/searchRetweets".
This is a GET API which will return all the indexes by sorting the indexes using retweets in ascending order in the tweet_api collection.

**searchComments**
You can access it using the url "http://localhost:3000/searchComments".
This is a GET API which will return top 5 tweets with highest comment count in the tweet_api collection




**Client**
As mentioned earlier, the client side contains the code for the application UI. To create the ui angular framework was used. 
You can start the clien by running the command:
ng serve
in the client directory of this repository.

The UI contains simple table created by akveo called ng2-smart-table.
The link to the library is as followed:
https://github.com/akveo/ng2-smart-table

Also, this angular code interacts with backend server using HTTPClientModule provided by angular.
