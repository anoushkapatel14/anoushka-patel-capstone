# Project Title - YouChoose

## Overview

Film selection app. Users linked to the same account swipe on films. If they see a film they want to watch, they swipe right, or left to discard the film. When both users swipe right on a film, they will get a "match". The film they have matched on will be transferred to a 'match' page.
### Problem

This app will solvce the problem on spending hours on deciding what film to watch. When users want to watch a film, they can look at their match page instead of scrolling films.

### User Profile

Couples, flatmates, families, groups of friends.

### Features

Swiping feature on films (or maybe a thumbs up, thumbs down) so users can like (or dislike) a film. 
A match page of films both users have liked.


## Implementation

### Tech Stack

List technologies that will be used in your app, including any libraries to save time or provide more functionality. Be sure to research any potential limitations.

React, Node.js, MySQL, Express.js, Knex react-swipeable https://www.npmjs.com/package/react-swipeable


### APIs


https://developer.themoviedb.org/docs/ 

### Sitemap

List the pages of your app with brief descriptions. You can show this visually, or write it out.


Swiping films page (homepage).
Matched films page - list of films users both like
Dashboard page
Login page
Sign up page


### Data



Users table
"likes" table
"matches' table

### Endpoints

List endpoints that your server will implement, including HTTP methods, parameters, and example responses.

/GET - will get the list of films from the API.

/GET/titles/most_pop_movies/?startYear=2012 - (for example. this will get all the most popular films from the year 2012 to present)

/POST - will post a film to either the "likes" table or the "matches" table


### Auth

Does your project include any login or user profile functionality? If so, describe how authentication/authorization will be implemented.

## Roadmap

Scope your project as a sprint. Break down the tasks that will need to be completed and map out timeframes for implementation. Think about what you can reasonably complete before the due date. The more detail you provide, the easier it will be to build.


Task 1 (backend): create the backend endpoints using the API (incuding how to filter for the required fields). Test the backend API to ensure it successfully retrieves and returns the list of most popular movies.



Task 2(frontend): Set up react app and components: e.g. App.js, FilmCard, FilmList etc.

Modify the frontend to make API requests to the Node.js backend for movie data.

Display the list of most popular movies on the frontend.
Ensure that the frontend can render the data received from the backend.


Implement the swiping motion using react-swipeable 


Task 3: TEST!



## Nice-to-haves

Your project will be marked based on what you committed to in the above document. Under nice-to-haves, you can list any additional features you may complete if you have extra time, or after finishing.

User auth

Rate a film

Users can filter by genre

When a film has been watched users can select "watched" 

Suggest films based on users likes.


### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed on your machine.

### Installing Dependencies

Navigate to the server directory and install the required packages:

npm install

### Running Migrations and Seeds

To set up the database, run the following commands:
npm run migrate
npm run seed

### Starting the Server
npm start
This will launch the server, and you can access the YouChoose application on http://localhost:3000.


### Dependencies -BACKEND: 
axios: Promise-based HTTP client.
bcrypt / bcryptjs: Password hashing.
casual: Mock data generation.
cors: Cross-Origin Resource Sharing middleware.
dotenv: Environment variable management.
express: Web framework for Node.js.
express-session: Session middleware for Express.
helmet: Security middleware.
jsonwebtoken: JSON Web Token authentication.
knex: SQL query builder.
mysql / mysql2: MySQL database connection.
node-fetch: Fetch API for Node.js.
passport: Authentication middleware for Node.js.
require: Require any file as a module in Node.js.
nodemon: Development server watcher.

### Dependencies - FRONTEND: 

@smastrom/react-rating: Customizable React component for star ratings.
@testing-library/jest-dom: Jest DOM testing utilities.
@testing-library/react: Testing utilities for React.
@testing-library/user-event: Simulate user events for testing.
axios: Promise-based HTTP client.
navigate: Client-side navigation library.
react: JavaScript library for building user interfaces.
react-dom: React package for working with the DOM.
react-router-dom: Declarative routing for React.js.
react-scripts: Create React App scripts.
react-spring: Spring-physics based animation library.
react-swipeable: React component for swipe interactions.
sass: CSS extension language.
start: Development server script.
web-vitals: Library for measuring web vitals.


### Scripts: 
start: Start the server.
migrate: Run database migrations.
migrate:down: Rollback the latest migration.
migrate:rollback: Rollback all completed migrations.
seed: Run database seeds.



