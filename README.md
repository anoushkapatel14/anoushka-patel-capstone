# Project Title - YouChoose

## Overview

Film selection app (to start with!). Users linked to the same account swipe on films. If they see a film they want to watch, they swipe right, or left to discard the film. When both users swipe right on a film, they will get a "match". The film they have matched on will be transferred to a 'match' page.
### Problem

This app will solvce the problem on spending hours on deciding what film to watch. When users want to watch a film, they can look at their match page instead of scrolling films.

### User Profile

Couples, flatmates, families, groups of friends.

### Features

Swiping feature on films (or maybe a thumbs up, thumbs down) so users can like (or dislike) a film. 
A match page of films both users have liked.

logo : https://www.canva.com/design/DAF0hZa7yis/WLroYt-MXgI_iZvQIyyUHw/edit 

## Implementation

### Tech Stack

List technologies that will be used in your app, including any libraries to save time or provide more functionality. Be sure to research any potential limitations.

React, Node.js, (possibly) react-swipeable https://www.npmjs.com/package/react-swipeable


### APIs

https://rapidapi.com/SAdrian/api/MoviesDatabase/

### Sitemap

List the pages of your app with brief descriptions. You can show this visually, or write it out.


Swiping films page (homepage).
Matched films page - list of films users both like

### Mockups

Provide visuals of your app's screens. You can use tools like Figma or pictures of hand-drawn sketches.

![Alt text](images/IMG_1500.jpg)
![Alt text](images/IMG_1501.jpg)
![Alt text](images/IMG_1502.jpg)



### Data

Describe your data and the relationships between them. You can show this visually using diagrams, or write it out. 

Every one user has many films they like (one to many)

### Endpoints

List endpoints that your server will implement, including HTTP methods, parameters, and example responses.

/GET - will get the list of films from the API.

/DELETE - will delete a film from the users list of matched films.

/GET/titles/most_pop_movies/?startYear=2012 - (for example. this will get all the most popular films from the year 2012 to present)


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

When a film has been watched users can select "watched" and it will disappear from their matches page

Suggest films based on users likes.