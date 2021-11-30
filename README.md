

# Challenge number 18: Social Network API

<p align="center">
   <img src="https://img.shields.io/badge/MongoDB-blue"  />
  <img src="https://img.shields.io/badge/mongoose-red"  />
    <img src="https://img.shields.io/badge/javascript-yellow" />
    <img src="https://img.shields.io/badge/express-orange" />
</p>

In thi challenge we learned about MongoDB and its speed with large amounts of data and flexibility with unstructured data. This is the first step in the MERN stack that we will be learning over the last part of this course. We will be using several technologies that social networking platforms use in their full-stack applications. The most important lesson here is to make sure we understand how to build and structure MongoDB and Mongoose.

My challenge is to build an API for a social network using Express.js for routing, a MongoDB database, and the Mongoose ODM. I will be using the [Express](https://www.npmjs.com/package/express) and [Mongoose](https://www.npmjs.com/package/mongoose) packages, and native JavaScript `Date` object to format timestamps.

I was asked to create a walkthrough video that demonstrates the functionality of the following acceptance criteria being met. Links to these video and GIF files can be found in the Demonstration section below. I have to break this task into 4 videos and 4 GIFs.


## User Story

```md
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```


## Acceptance Criteria

```md
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia Core for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia Core
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```


## Demonstration

The following animations show the application's API routes being tested by me in Insomnia Core.

The first animation shows GET routes to return all users and all thoughts being tested in Insomnia Core:

## Screencastify video
[Homework Demo 01 (video)](https://watch.screencastify.com/v/GADmRQjz7txtx7kKHYAh)
## GIF of same file
![Click here for GIF](/assests/First_Animation.gif)

The second animation shows GET routes to return a single user and a single thought being tested in Insomnia Core:

## Screencastify video
[Homework Demo 02 (video)](https://watch.screencastify.com/v/XEaNRLP2qanXbZrItgJa)
## GIF of same file
![Screenshot](./assests/Second_Animation.gif)

The third animation shows the POST, PUT, and DELETE routes for users being tested in Insomnia Core:

## Screencastify video
[Homework Demo 03 (video)](https://watch.screencastify.com/v/vYM4TKvylIOw0iVhHcah)
## GIF of same file
![Screenshot](./assests/Third_Animation.gif)

Your walkthrough video should also show the POST, PUT, and DELETE routes for thoughts being tested in Insomnia Core.

The final animation shows the POST and DELETE routes for a user’s friend list being tested in Insomnia Core:

## Screencastify video
[Homework Demo 04 (video)](https://watch.screencastify.com/v/I2TovB1C40M4Nn8GZk6p)
## GIF of same file
![Screenshot](./assests/Forth_Animation.gif)

Your walkthrough video should also show the POST and DELETE routes for reactions to thoughts being tested in Insomnia Core.


## GitHub link

* https://github.com/mcswajl/social-networking The URL of my GitHub repository.

## Contact Information
Josh McSwain
Email: joshua.mcswain@mecknc.gov
UNCC Coding Bootcamp Fall 2021
