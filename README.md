# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# General description:

This project was built in order to learn MERN stack.
This was first NODE project hosted on external server which was fully set up by me (Nginx, pm2).
Application has JWT token functionality, and its state is managed by redux.
There was no mean of polishing my styling skills in this project, so Bulma was utilized.
Project is served from AWS ubuntu :). Data is stored on MongoDB atlas.
21-09-22: In the future there will be letsencrypt added and custom domain.

# Use case:

App would serve as a job offer site where farmers could post field jobs.
Generaly: Farmers have huge fields to maintain and their scalability is limited by the amount of workers.
Solution to this problem would be application allowing for outsourcing some work.

1. Client - posts order
2. Worker - accepts order

# Structure

Project consists of two folders
/front - with frontend part of the app
/back - with backend.

To run this project you need to:

1. clone it
2. Install dependancies
3. modify .env variable to:
   NODE_ENV = set to development or production
   MONG_USER = set to mongodb atlas user
   MONG_PASS = set to mongodb atlas password
   JWT_SECRET = set to JWT secret token string
4. navigate to /front and command: npm run
5. Navigate to /back and command: node index.js

# Structure:

BACK:
typical node js structure, functions have comments over them despite possessing self explanatory names.
I can say that, as I'm writing this after one month after writing those files.
There was work over analytics functionality gathering statistics similiar to those from Monopoly https://github.com/emceDev/monopol/blob/main/pages/api/DownloadReport/index.js , but the project lacks funding :D.

FRONT:
Folders: app, features - redux related files (login and service state mechanism)

Makro: Sections of the website,
Client.js - section for client (person wanting to post job)
Worker.js - section for person wanting to search for job (worker)
!For now both sections are aviable for every user by switching buttons, but this may change in future.
LogReg - login or register switch to load <Register/> or <Login/> components

Mikro: Components of the website,
Create order - form to post orders(jobs)...
Navigation - Navigation bar
OrderHistory - User order history, same for workers and clients
OrderList - List of aviable orders
ProtectedRoute - Route used in order to redirect not logged users to '/'

Styles: scss styles.
Note that I made custom svg, but replaced it with some picture from game, as it was more appropriate.

# Hope this helped anyone :), Have a great day!
