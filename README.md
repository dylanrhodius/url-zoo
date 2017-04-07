# URL Zoo
URL Zoo is a web app that makes URLs simple. What is unique about URL Zoo is the way in which it simplifies URLs. It randomly chooses a **verb** and **animal** from an array and pairs them together, creating a simple url which is easy to remember! (E.g. SmokingPanda)
Checkout the [live demo here!](https://urlzoo.herokuapp.com/) Please note that the app was done with a Google Chrome browser as reference, so it might not work as intended on other browsers.

### User Stories
```
As a user:
I would like to be able to shorten my links,
So that they are easier to manage.
```
```
As a user:
I would like my links to be actual words rather than alphanumerical terms,
So that they are easier to remember.
```
```
As a user:
I would like to only be able to input valid links,
So that I don't store links that won't work.
```
```
As a user:
I would like my links to be stored in a persistant database,
So that I can access them later.
```
```
As a user:
I would like to see my links in reverse chronological order,
So that I can access the latest created link easier.
```
```
As a user:
I would like to only store unique links,
So that I don't create duplicate entries.
```
```
As a user:
I would like the short links to redirect me to their original links,
So that I can use the simpler version of each link.
```

### Installation

Ensure you have updated to the latest stable versions of Node.js and npm, and that you have MongoDB installed and available locally on port 27017.

Then:
* Clone this repo `git clone https://github.com/dylanrhodius/url-zoo.git`.
* Change into the url-zoo directory `cd url-zoo`.
* To setup environment variables, create a `.env` file in the url-zoo root directory and include the following:
```
MONGO_URL=mongodb://localhost:27017/urlzoo_test
APP_DOMAIN=localhost
PORT=3000
```
* Run `npm install` to install dependencies.

### Using the App

* Host the server by running `npm start`.
* Go to your browser and visit `http://localhost:3000/`.
* Alternatively, try the [live demo](https://urlzoo.herokuapp.com/).
* To run the tests, simply run `npm test`.

### Technologies

URL Zoo was built using the universal Javascript approach and employs Javascript across the full-stack. It includes the following:

* [**Mongodb:**](https://www.mongodb.com/) an open source database that uses a document-oriented data model.
* [**Express:**](http://expressjs.com/) a web application framework.
* [**React:**](https://facebook.github.io/react/) a declarative, efficient, and flexible JavaScript library for building user interfaces.
* [**Node.js:**](https://nodejs.org/en/) an open-source, cross-platform JavaScript runtime environment.
* [**Bootstrap:**](http://getbootstrap.com/) a front-end web framework for designing websites.

Testing:
* [**Jest:**](https://facebook.github.io/jest/) a JavaScript Testing utility for testing React.
* [**Enzyme:**](http://airbnb.io/enzyme/) a JavaScript Testing utility for testing React.
* [**Chai:**](http://chaijs.com/) a unit testing library.

### Screenshots

**Mainpage with links added**
![p1](http://i.imgur.com/KQVADGJ.png)

### Future improvements

* Make the web app responsive.
* Change incorrect URL error message from a standard alert to a Bootstrap alert, or something fancier.
* Offer individual statistics about each link: track number of times visited, date added, time and date visited, etc.


### Credits

This app was created following [Andrew Hansen's](https://github.com/arahansen) "spooky monsters" mern-tutorial.
* [Mern-tutorial repo](https://github.com/arahansen/mern-tutorial)
* [Video walkthrough of tutorial](https://www.youtube.com/watch?v=YAayQekE8po&t=5s)
